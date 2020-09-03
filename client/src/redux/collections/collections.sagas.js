import {takeLatest, call, all, put} from 'redux-saga/effects';
import collectionActionTypes from './collections.types';

import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './collections.actions';

export function* fetchCollectionsAsync(){
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch(error){
        yield put(fetchCollectionsFailure(error.message))
    }
}


export function* fetchCollectionsStart(){
    yield takeLatest(collectionActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync )
} 

export function* collectionSagas(){
    yield all([call(fetchCollectionsStart)])
}