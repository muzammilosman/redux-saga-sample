import { call, put } from "redux-saga/effects";
import { setUsers } from "../../reducers/users";
import { fetchUsers } from "../requests/users";

export function* handleGetUsers(action){
    try {
        const response = yield call(fetchUsers);
        const { data } = response;
        yield put(setUsers(data))
    } catch(error) {
        console.log(error)
    }
}