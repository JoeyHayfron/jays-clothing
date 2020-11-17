import { takeLatest, put, all, call } from 'redux-saga/effects'; 

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from './../../firebase/firebase.utils';

import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure} from './user.action';


export function* getUserSnapshot(userAuth, otherData){
try{ 
    const userRef = yield call(createUserProfileDocument, userAuth, otherData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
} catch(error){
    yield put(signInFailure(error))
}
}

export function* onGoogleSignIn() {
   try{
       const {user} = yield auth.signInWithPopup(googleProvider);
       yield getUserSnapshot(user);
   } catch(error){
       yield put(signInFailure(error))
   }
}

export function* onEmailSignIn({payload: {email, password}}) {
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getUserSnapshot(user);
    }catch(error){
        yield put(signInFailure(error));
    }
}

export function* signOut() {
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error){
        yield put(signOutFailure(error));
    }
}

export function* onSignUpStart ({payload: {email, password, displayName}}) {
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, otherData: {displayName}}))
    } catch(error) {
        yield put(signUpFailure(error))
    }

}

export function* signInAfterSignUp({payload: {user, otherData}}) {
        yield getUserSnapshot(user, otherData);
}

export function* isUserAuthenticated() {
    try{
    const userAuth = yield call(getCurrentUser);
    if(!userAuth) return;
    yield getUserSnapshot(userAuth);
    } catch(error){
        yield signInFailure(error);
    }
} 

export function* googleSignInStart() {
    yield takeLatest('GOOGLE_SIGNIN_START', onGoogleSignIn);
}

export function* emailSignInStart() {
    yield takeLatest('EMAIL_SIGNIN_START', onEmailSignIn)
}

export function* checkUserSession() {
    yield takeLatest('CHECK_USER_SESSION', isUserAuthenticated);
}

export function* onSignOutStart() {
    yield takeLatest('SIGNOUT_START', signOut);
}

export function* singUpStart() {
    yield takeLatest('SIGNUP_START', onSignUpStart)
}

export function* signInOnSignUp() {
    yield takeLatest('SIGNUP_SUCCESS', signInAfterSignUp)
}

export function* userSaga(){
    yield all([
        call(googleSignInStart),
        call(emailSignInStart),
        call(checkUserSession),
        call(onSignOutStart),
        call(singUpStart),
        call(signInOnSignUp)
    ]);
}