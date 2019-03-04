import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import imageSaveReducer from './imageSaveReducer';

const rootReducer = combineReducers({
  locSearch: searchReducer,
  saveImage: imageSaveReducer
});

export default rootReducer;
