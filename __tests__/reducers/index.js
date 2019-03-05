import rootReducer from './../../src/reducers';
import {createStore} from 'redux';
import searchReducer from './../../src/reducers/searchReducer';
import constants from './../../src/constants';
const { c } = constants;

describe('Library of congress search App', () => {

  const store = createStore(rootReducer)

  describe('searchReducer', () => {
    it('Should accept and return initial state', () => {
      expect(searchReducer({}, {type: null})).toEqual({});
    })
  });
});
