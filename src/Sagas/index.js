import { call, all } from 'redux-saga/effects'
import { LoadRestoWatcher } from "./LoadRestoWatcher";
import { LoadVisitsWatcher } from "./LoadVisitsWatcher"

export function* rootSaga() {
    yield all([
        call(LoadRestoWatcher),
        call(LoadVisitsWatcher)
    ]);
}