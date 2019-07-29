import {
  CHANGE_UP,
  CHANGE_DOWN,
  CHANGE_LEFT,
  CHANGE_RIGHT,
} from '../../actionTypes/directions';

export default (state = { direction: 'up' }, action) => {
  switch(action.type) {
    case CHANGE_UP: {
      return {
        direction: 'up'
      };
    }
    case CHANGE_DOWN: {
      return {
        direction: 'down'
      };
    }
    case CHANGE_LEFT: {
      return {
        direction: 'left'
      };
    }
    case CHANGE_RIGHT: {
      return {
        direction: 'right'
      };
    }

    default: {
      return state;
    }
  }
}