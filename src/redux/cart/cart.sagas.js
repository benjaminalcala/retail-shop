import {takeLatest, all, call, put} from 'redux-saga/effects';
import userActionTypes from '../user/user.types';
import {clearCartSuccess} from './cart.actions';

export function* clearCart(){
    yield put(clearCartSuccess())
   
}


export function* onUserSignOut(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCart)
}


export function* cartSagas(){
    yield all([call(onUserSignOut)])
}