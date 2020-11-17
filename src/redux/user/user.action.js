export const googleSignInStart = () => ({
  type: 'GOOGLE_SIGNIN_START',
});

export const signInSuccess = (user) => ({
  type: 'SIGNIN_SUCCESS',
  payload: user,
});

export const signInFailure = (error) => ({
  type: 'SIGNIN_FAILURE',
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: 'EMAIL_SIGNIN_START',
  payload: emailAndPassword,
});

export const checkUserSession = () =>({
  type: 'CHECK_USER_SESSION'
});

export const signOutStart = () =>({
  type: 'SIGNOUT_START',
});

export const signOutSuccess = () =>({
  type: 'SIGNOUT_SUCCESS',
});

export const signOutFailure = (error) =>({
  type: 'SIGNOUT_FAILURE',
  payload: error
});

export const signUpStart = (userDetails) => ({
  type: 'SIGNUP_START',
  payload: userDetails,
})

export const signUpSuccess = ({user, otherData}) => ({
  type: 'SIGNUP_SUCCESS',
  payload: {user, otherData}
});

export const signUpFailure = (error) => ({
  type: 'SINGUP_FAILURE',
  payload: error
})