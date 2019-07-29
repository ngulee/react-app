import {
  INCREASE_CONUT,
  DECREASE_CONUT,
  RESET_COUNT,
} from '../../actionTypes/arithmetic';

export default (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREASE_CONUT:
      return {
        count: state.count + 1,
      };
    case DECREASE_CONUT:
      return {
        count: state.count - 1,
      };
    
    case RESET_COUNT:
      return {
        count: 0,
      };
    default:
      return state;
  }
};