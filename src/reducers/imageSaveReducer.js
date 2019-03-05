import * as types from '../constants/ActionTypes';

const imageSaveReducer = (state = {}, action) => {
  switch(action.type) {
    case types.SAVE_IMAGE:
    return Object.assign({}, state, {
      [action.id]: {
          thumb: action.thumb,
          title: action.title,
          fullImage: action.fullImage
      }
    });
    default:
    return state;
  }
};

export default imageSaveReducer;
