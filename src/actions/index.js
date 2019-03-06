import constants from './../constants';
const { firebaseConfig, c } = constants;
import Firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
const pictureCollections = firebase.database().ref('pictureCollections');

export function saveImage(id, title, fullImage) {
  return () => pictureCollections.push({
    id: id,
    title:title,
    fullImage: fullImage
  });
}

export function watchFirebasePictureCollectionRef() {
  return function(dispatch) {
    pictureCollections.on('child_added', data=> {
      console.log(data.val());
    });
  };
}


export const searchSubmit = (query) => ({
  type: c.SEARCH_SUBMIT,
  query,
});

export const searchComplete = (query, results) => ({
  type: c.SEARCH_COMPLETE,
  query,
  results
});


export const selectImage = (title, fullImage) => ({
  type: c.SELECT_IMAGE,
  title,
  fullImage
});

export const hideModal = () => ({
  type: c.HIDE_MODAL
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
