import { combineReducers } from 'redux';
import quotesReducer from './quotesReducer';
import usersReducer from './usersReducer'

export default combineReducers({
  usersReducer,
  quotesReducer
});