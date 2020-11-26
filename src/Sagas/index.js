import { call, all } from 'redux-saga/effects'
import { LoadRestoWatcher } from "./LoadRestoWatcher";

export function* rootSaga() {
    yield all([
        call(LoadRestoWatcher)
    ]);
}