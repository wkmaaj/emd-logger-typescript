import { IStringifyConfig } from '@/interfaces';

export default (
  obj: unknown,
  msg: string,
  asString: boolean,
  indentationSpacing: number,
  maximumDepth: number,
  stringify: (
    obj: unknown,
    config?: IStringifyConfig,
    indentationSpacing?: number
  ) => string
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
              deterministic: false
            },
            indentationSpacing
          )
    }`;
  }

  return `${msg ? `${msg}: ` : ''}${
    obj ? stringify(obj, undefined, indentationSpacing) : ''
  }`;
};
