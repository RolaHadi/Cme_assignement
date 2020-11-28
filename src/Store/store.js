import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "../Sagas/index";
import combineReducer from '../Reducers/combineReducer'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(combineReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);