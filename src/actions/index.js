import * as types from '../constants/ActionTypes';

export const searchSubmit = (query) => ({
  type: types.SEARCH_SUBMIT,
  query,
});

export const searchComplete = (query, results) => ({
  type: types.SEARCH_COMPLETE,
  query,
  results
});

export const saveImage = (url, id) => ({
  type: types.SAVE_IMAGE,
  url,
  id
});

export function fetchLocSearch(query) {
  return function(dispatch) {

    dispatch(searchSubmit(query));
    return fetch('https://cors-anywhere.herokuapp.com/http://loc.gov/pictures/search/?q=' + query +  '&fo=json').then(
      response => response.json(),
      error => console.log('An error occured', error)
    )
      .then(function(json) {
        const urls = json.results.map((result) => {
          return 'https:' + result.image.full;
        });
        dispatch(searchComplete(query, urls));
      });
  };
}
