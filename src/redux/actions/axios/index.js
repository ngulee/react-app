import axios from 'axios';
import {
  REQUEST_GET,
  RECEIVE_GET,
} from '../../actionTypes/axios';

const requsetGet = () => {
  return {
    type: REQUEST_GET,
  };
}

const receiveGet = (data) => {
  return {
    type: RECEIVE_GET,
    data,
  };
}

export const getData = (query = {}) => {
  return (dispath) => {
    dispath(requsetGet());
    axios
      .get('https://easy-mock.com/mock/5b4eed440361dd2e80347d07/tets/api')
      .then(({ data = {} }) => {
        dispath(receiveGet(data))
      })
  }
}
