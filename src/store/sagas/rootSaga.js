import { takeLatest } from 'redux-saga/effects'
import { GET_USERS } from '../reducers/users';
import { handleGetUsers } from './handlers/users';

export function* watcherSaga() {
    yield takeLatest(GET_USERS, handleGetUsers);
}