import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './Filter';

const rootReducer = combineReducers({ bookReducer, filterReducer });

export default rootReducer;
