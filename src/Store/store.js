import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "../Sagas/index";
import { restoReducer } from '../Reducers/restoReducer'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(restoReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);