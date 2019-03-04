import * as types from '../constants/ActionTypes';

const imageSaveReducer = (state = {}, action) => {
  switch(action.type) {
    case types.SAVE_IMAGE:
    return Object.assign({}, state, {
      [action.id]: {
          url: action.url,
          title: action.title
      }
    });
    default:
    return state;
  }
};

export default imageSaveReducer;
