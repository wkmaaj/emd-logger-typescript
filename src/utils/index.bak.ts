import { IAuditEvent, IComposeConfig } from '@/interfaces';
import { configure } from 'safe-stable-stringify';

/**
 * @author wkmaaj
 * @param maximumDepth the number of object nesting levels that will be serialized.
 * @param bigint flag indicating whether or not bigint values are converted to numbers,
 * default is true, if set to false then the bigint values are ignored when serializing an object.
 * @returns
 */
export const stringify = (
  obj: unknown,
  config = {
    bigint: true,
    maximumDepth: 4,
    maximumBreadth: 4,
    deterministic: false
  },
  indentationSpacing = 2
) => configure({ ...config })(obj, null, indentationSpacing) ?? '';

/**
 * @author wkmaaj
 * @param obj an audit event object to be sanitized.
 * @returns
 */
const sanitizeAuditEvent = (obj: IAuditEvent) => {
  if (obj.err && obj.err.config) {
    const { err } = obj;
    const { config, e } = err;
    const { url, method } = config;
    return {
      ...obj,
      err: {
        ...e,
        config: {
          url,
          method,
          ...(() => {
            const filteredKeys = Object.keys(config).filter(
              (key) => key !== 'url' && key !== 'method'
            );
            if (filteredKeys.length === 0) return {};
            return {
              additional: filteredKeys
                .map((filteredKey) => ({
                  [filteredKey]: config[filteredKey]
                }))
                .reduce((prev, curr) => ({ ...prev, ...curr }), {})
            };
          })()
        }
      }
    };
  }
  return obj;
};

const stringifyAuditEvent = (
  obj: IAuditEvent | unknown,
  indentationSpacing: number,
  maximumDepth = 2
) =>
  stringify(
    sanitizeAuditEvent(obj as IAuditEvent),
    {
      bigint: true,
      maximumBreadth: 2,
      maximumDepth,
      deterministic: true
    },
    indentationSpacing
  );

const composeUtil = (
  obj: unknown,
  msg: string,
  asString: boolean,
  indentationSpacing = 2,
  maximumDepth = 2
) => {
  if (asString) {
    return `${msg ? `${msg}: ` : ''}${
      typeof obj === 'string'
        ? obj
        : stringify(
            obj,
            {
              bigint: true,
              maximumBreadth: 2,
              maximumDepth,
              deterministic: true
            },
            indentationSpacing
          )
    }`;
  }
  return `${msg ? `${msg}: ` : ''}${
    obj ? stringifyAuditEvent(obj, indentationSpacing, maximumDepth) : ''
  }`;
};

/**
 * @author wkmaaj
 * @param obj
 * @param msg
 * @param asString
 * @param indentationSpacing
 * @param maximumDepth
 * @returns
 */
export const compose = (config: IComposeConfig) =>
  composeUtil(
    config.obj,
    config.msg,
    config.asString,
    config?.indentationSpacing ? (config.indentationSpacing as number) : 2,
    config?.maximumDepth ? (config.maximumDepth as number) : 2
  );
