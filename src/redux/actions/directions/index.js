import {
  CHANGE_UP,
  CHANGE_DOWN,
  CHANGE_LEFT,
  CHANGE_RIGHT,
} from '../../actionTypes/directions';

export const changeUp = () => {
  return {
    type: CHANGE_UP
  }
};

export const changeDown = () => {
  return {
    type: CHANGE_DOWN
  }
}

export const changeLeft = () => {
  return {
    type: CHANGE_LEFT
  }
}

export const changeRight = () => {
  return {
    type: CHANGE_RIGHT
  }
}