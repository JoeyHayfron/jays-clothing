const INITIAL_STATE = {
  collections: null,
  isFethcing: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_COLLECTIONS_START':
      return {
        ...state,
        isFethcing: true,
      };
    case 'FETCH_COLLECTIONS_SUCCESS':
      return {
        ...state,
        collections: action.payload,
        isFethcing: false,
      };
    case 'FETCH_COLLECTIONS_FAILURE':
      return {
        ...state,
        isFethcing: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
