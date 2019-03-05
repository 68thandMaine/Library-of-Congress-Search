import * as types from '../constants/ActionTypes';

const selectImageReducer = (state = {}, action) => {
  switch(action.type) {
    case types.SELECT_IMAGE:
    return Object.assign({}, {
          shown: true,
          title: action.title,
          fullImage: action.fullImage
      });
    default:
    return state;
  }
};

export default selectImageReducer;
