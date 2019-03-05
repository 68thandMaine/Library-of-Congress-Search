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

export const saveImage = (id, thumb, title, fullImage) => ({
  type: types.SAVE_IMAGE,
  id,
  thumb,
  title,
  fullImage
});

export const selectImage = (title, fullImage) => ({
  type: types.SELECT_IMAGE,
  title,
  fullImage
});

function removeNonDigitized(results) {
  return results.filter((result) => {
    return !result.image.alt.includes('not digitized');
  });
}

export function fetchLocSearch(query) {
  return function(dispatch) {

    dispatch(searchSubmit(query));
    return fetch('https://cors-anywhere.herokuapp.com/http://loc.gov/pictures/search/?q=' + query +  '&fo=json').then(
      response => response.json(),
      error => console.log('An error occured', error)
    )
      .then(function(json) {
        const infos = removeNonDigitized(json.results).map((result) => {
          return {
            title: result.title,
            thumb: 'https:' + result.image.thumb,
            fullImage: 'https:' + result.image.full
          };
        });
        dispatch(searchComplete(query, infos));
      });
  };
}
