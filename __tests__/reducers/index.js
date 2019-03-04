import * as types from './../../src/constants/ActionTypes';
import rootReducer from './../../src/reducers';
import {createStore} from 'redux';
import searchReducer from './../../src/reducers/searchReducer';

describe('Library of congress search App', () => {

  const store = createStore(rootReducer)

  describe('searchReducer', () => {
    it('Should accept and return initial state', () => {
      expect(searchReducer({}, {type: null})).toEqual({});
    })
  });
});
