import { IAuditEvent } from '@/interfaces';
import composeUtil from './compose.util';
import sanitizeUtil from './sanitize.util';
import stringifyUtil from './stringify.util';

export const stringify = (
  obj: unknown,
  config = {
    bigint: true,
    maximumDepth: 10,
    maximumBreadth: 4,
    deterministic: true
  },
  indentationSpacing = 2
) => stringifyUtil(obj, config, indentationSpacing);

export const stringifyAndSanitize = (
  obj: IAuditEvent | unknown,
  config = {
    bigint: true,
    maximumDepth: 10,
    maximumBreadth: 4,
    deterministic: true
  },
  indentationSpacing = 2
) =>
  stringifyUtil(sanitizeUtil(obj as IAuditEvent), config, indentationSpacing);

export const compose = (
  obj: unknown,
  msg: string,
  asString: boolean,
  indentationSpacing: number,
  maximumDepth: number
) =>
  composeUtil(obj, msg, asString, indentationSpacing, maximumDepth, stringify);
