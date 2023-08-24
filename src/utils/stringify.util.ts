import { IStringifyConfig } from '@/interfaces';
import { configure } from 'safe-stable-stringify';

/**
 * @author wkmaaj
 * @param maximumDepth the number of object nesting levels that will be serialized.
 * @param bigint flag indicating whether or not bigint values are converted to numbers,
 * default is true, if set to false then the bigint values are ignored when serializing an object.
 * @returns
 */
export default (
  obj: unknown,
  config: IStringifyConfig,
  indentationSpacing = 2
) => configure({ ...config })(obj, null, indentationSpacing) ?? '';
