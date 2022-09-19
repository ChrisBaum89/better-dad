import { combineReducers } from 'redux';
import quotesReducer from './quotesReducer';
import usersReducer from './usersReducer'
import tasksReducer from './tasksReducer'

export default combineReducers({
  usersReducer,
  quotesReducer,
  tasksReducer,
});