import { combineReducers } from 'redux';
import appReducers from './App';

const { listing } = appReducers;

const rootReducer = combineReducers({
  listing,
});

export default rootReducer;
