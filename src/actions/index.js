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

export const saveImage = (id, url, title) => ({
  type: types.SAVE_IMAGE,
  id,
  url,
  title
});

export function fetchLocSearch(query) {
  return function(dispatch) {

    dispatch(searchSubmit(query));
    return fetch('https://cors-anywhere.herokuapp.com/http://loc.gov/pictures/search/?q=' + query +  '&fo=json').then(
      response => response.json(),
      error => console.log('An error occured', error)
    )
      .then(function(json) {
        const infos = json.results.map((result) => {
          return {
            title: result.title,
            url: 'https:' + result.image.full
          };
        });
        dispatch(searchComplete(query, infos));
      });
  };
}
