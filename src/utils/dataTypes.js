const toString = Object.prototype.toString;
const stringType = '[object String]';
const numberType = '[object Number]';
const undefinedType = '[object Undefined]';
const nullType = '[object Null]';
const booleanType = '[object Boolean]';
const funcType = '[object Function]';
const objType = '[object Object]';
const dateType = '[object Date]';
const regType = '[object RegExp]';

export const isString = (argument) => {
  return toString.call(argument) === stringType;
}

export const isNumber = (argument) => {
  return toString.call(argument) === numberType;
}

export const isUndefined = (argument) => {
  return toString.call(argument) === undefinedType;
}

export const isNull = (argument) => {
  return toString.call(argument) === nullType;
}

export const isBoolean = (argument) => {
  return toString.call(argument) === booleanType;
}

export const isFunction = (argument) => {
  return toString.call(argument) === funcType;
}

export const isObject = (argument) => {
  return toString.call(argument) === objType;
}

export const isDate = (argument) => {
  return toString.call(argument) === dateType;
}

export const isRegExp = (argument) => {
  return toString.call(argument) === regType;
}