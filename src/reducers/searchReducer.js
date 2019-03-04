import * as types from '../constants/ActionTypes';

export default (state = {}, action) => {
  switch(action.type) {
    case types.SEARCH_SUBMIT:
    return {
      isFetching: true,
      query: action.query,
      results: []
    };
    default:
    return state;
  }
};
