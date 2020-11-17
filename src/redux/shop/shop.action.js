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

