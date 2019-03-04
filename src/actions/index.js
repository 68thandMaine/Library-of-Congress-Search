// import v4 from 'uuid/v4';
import * as types from '../constants/ActionTypes';

export const searchSubmit = (query) => ({
  type: types.SEARCH_SUBMIT,
  query,
});

export function fetchLocSearch(query) {
  return function(dispatch) {

    dispatch(searchSubmit(query));
    return fetch('https://cors-anywhere.herokuapp.com/http://loc.gov/pictures/search/?q=' + query +  '&fo=json').then(
      response => response.json(),
      error => console.log('An error occured', error)
    )
      .then(function(json) {
        console.log('results', json);
      });
  };
}
