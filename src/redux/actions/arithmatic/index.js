import {
  INCREASE_CONUT,
  DECREASE_CONUT,
  RESET_COUNT,
} from '../../actionTypes/arithmetic';

export const increaseCount = (count) => {
  return {
    type: INCREASE_CONUT,
    count,
  }
}

export const decreaseCount = (count) => {
  return {
    type: DECREASE_CONUT,
    count,
  }
}

export const resetCount = (count) => {
  return {
    type: RESET_COUNT,
    count,
  }
}