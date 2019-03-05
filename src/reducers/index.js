import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import imageSaveReducer from './imageSaveReducer';
import selectImageReducer from './selectImageReducer';

const rootReducer = combineReducers({
  locSearch: searchReducer,
  saveImage: imageSaveReducer,
  selectedImage: selectImageReducer
});

export default rootReducer;
