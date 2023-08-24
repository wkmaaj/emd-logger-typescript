import stringify from 'safe-stable-stringify';

export default (obj: unknown) => {
  console.log(stringify(obj));
  return obj;
};
