import {takeEvery, call, put, all} from 'redux-saga/effects';

import {firestore, convertCollectionsToMap} from './../../firebase/firebase.utils';

import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.action';

export function* fetchCollectionsAsync(){
    try{
        const collectionsRef = firestore.collection('collections');
        const snapshot = yield collectionsRef.get()
        const collectionsMap = yield call(convertCollectionsToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap))
    }catch(error){
        yield put(fetchCollectionsFailure(error))
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery('FETCH_COLLECTIONS_START', fetchCollectionsAsync)
}

export function* shopSagas(){
    yield all([
        call(fetchCollectionsStart)
    ])
}