import { combineReducers } from 'redux';
import arithmetic from './arithmetic';
import directions from './directions';
import axios from './axios';

export default combineReducers({
  axios,
  arithmetic,
  directions,
});