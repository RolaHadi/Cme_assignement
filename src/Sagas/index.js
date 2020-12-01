import { call, all } from 'redux-saga/effects'
import { LoadRestoWatcher } from "./LoadRestoWatcher";
import { LoadVisitsWatcher } from "./LoadVisitsWatcher"
import { AddVisitWatcher } from "./AddVisitWatcher"
import { LoadRestoTypeWatcher } from './LoadRestoTypeWatcher';
import { LoadRestoSearchWatcher } from './LoadRestoSearchWatcher';

export function* rootSaga() {
    yield all([
        call(LoadRestoWatcher),
        call(LoadVisitsWatcher),
        call(AddVisitWatcher),
        call(LoadRestoTypeWatcher),
        call(LoadRestoSearchWatcher)
    ]);
}