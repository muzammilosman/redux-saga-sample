import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from './reducers/users'
import { watcherSaga } from "./sagas/rootSaga";
import createSagaMiddleware from "redux-saga";

const reducer = combineReducers({
    users: usersReducer
});

const sagaMiddleWare = createSagaMiddleware();

const middleware = [sagaMiddleWare];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleWare.run(watcherSaga)

export default store;