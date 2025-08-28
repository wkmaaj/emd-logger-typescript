import { IStringifyConfig } from '@/interfaces';
import { configure } from 'safe-stable-stringify';

/**
 * @author wkmaaj
 * @param obj an object to be stringified.
 * @param config an object specifying configuration options for stringification.
 * @param indentationSpacing the number of white space characters to use when indenting.
 * @returns
 */
export default (
  obj: unknown,
  config: IStringifyConfig,
  indentationSpacing = 2
) => configure({ ...config })(obj, null, indentationSpacing) ?? '';
