import {
  firestore,
  convertCollectionsToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: 'FETCH_COLLECTIONS_START',
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: 'FETCH_COLLECTIONS_SUCCESS',
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: 'FETCH_COLLECTIONS_FAILURE',
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionsRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionsRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
