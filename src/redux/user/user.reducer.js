const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case 'SIGNOUT_SUCCESS':
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case 'SIGNUP_FAILURE':
    case 'SIGNOUT_FAILURE':
    case 'SIGNIN_FAILURE':
      return {
          ...state,
          error: action.payload.message
      };
    default:
      return state;
  }
};

export default userReducer;
