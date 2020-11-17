import {takeLatest, put, call, all} from 'redux-saga/effects';

import {clearCart} from './cart.action';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest('SIGNOUT_SUCCESS', clearCartOnSignOut)
}


export function* cartSaga() {
    yield all([
        call(onSignOutSuccess)
    ])
}