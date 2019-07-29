import {
  REQUEST_GET,
  RECEIVE_GET,
} from '../../actionTypes/axios';

export default (state = {}, actions) => {
  switch (actions.type) {
    case REQUEST_GET : {
      return {
        loading: true,
      }
    }
    case RECEIVE_GET : {
      const { data = {} } = actions;
      return {
        loading: false,
        data,
      }
    }
    default: {
      return state;
    }
  }
}