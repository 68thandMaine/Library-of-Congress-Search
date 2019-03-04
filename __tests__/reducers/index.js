// import * as types from './../../src/constants/ActionTypes';
// import * as actions from './../../src/actions;
// import rootReducer from './../../src/reducers';
// import {createStore} from 'redux';
import searchReducer from './../../src/reducers/searchReducer';

describe('Library of congress search App', () => {
  describe('searchReducer', () => {
    it('Should accept and return initial state', () => {
      expect(searchReducer([], {type: null})).toEqual([]);
    })
  });
});
// describe('Library of congress search App', () => {
//
//   describe('Should accept and return initial state.', () => {
//     expect(searchReducer([], {type: null})).toEqual([]);
//   });
// })
