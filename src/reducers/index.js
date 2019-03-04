import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  locSearch: searchReducer
})

export default rootReducer;
