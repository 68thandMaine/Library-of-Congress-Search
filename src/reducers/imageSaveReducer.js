import * as types from '../constants/ActionTypes';

const imageSaveReducer = (state = {}, action) => {
    switch(action.type) {
    case types.RECEIVE_PICTURE:
    console.log("Receive_Picture action: ", action);
    console.log("-----------------------");
    console.log('             ');
        return Object.assign({}, state, {
            [action.picture.id]: {
                title: action.picture.title,
                thumb: action.picture.thumb,
                fullImage: action.picture.fullImage
            }
        });

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
