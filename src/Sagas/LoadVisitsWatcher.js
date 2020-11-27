import { takeLatest, call, put } from 'redux-saga/effects'

import { LOAD_VISITS, setVisit } from '../Actions/action';
import { getVisit } from '../API/apiCalls'
export function* LoadVisitsWatcher() {
    yield takeLatest(LOAD_VISITS, LoadVisitApi)

}

function* LoadVRestoFlow(action) {
    let visits = [];
    try {
        Resto = yield call(getVisit, { action })
        yield put(setVisit(Visit));
        console.log(visit)

    } catch (error) {
        console.log(error);
    }
}