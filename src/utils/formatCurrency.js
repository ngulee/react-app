import { isNumber } from './dataTypes';

export const formatCurreny = (num, { decimal = 2, symbol = '' } = {}) => {
  if (!num) {
    return num;
  }
  const number = parseFloat(num);

  if (!isNumber(number) || !number) {
    return num;
  }

  let resultNum = Math.round(Number(number) * (10 ** decimal)) / (10 ** decimal);
  resultNum = resultNum.toLocaleString('zh-Hans-CN');
  return symbol ? `${symbol} ${resultNum}` : resultNum;
}