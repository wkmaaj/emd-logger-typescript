import { IAuditEvent } from '@/interfaces';

/**
 * @author wkmaaj
 * @param obj an audit event object to be sanitized.
 * @returns
 */
export default (obj: IAuditEvent) => {
  // error handling for logging
  if (obj.err && obj.err.config) {
    // extracting specific details from audit event for logging
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
