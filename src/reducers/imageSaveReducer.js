import * as types from '../constants/ActionTypes';

const imageSaveReducer = (state = {}, action) => {
    switch(action.type) {
    case types.RECEIVE_PICTURE:
    // console.log("Receive_Picture state: ", state)
        return Object.assign({}, state, {
            [action.id]: {
                title: action.title,
                fullImage: action.fullImage
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
