import { takeLatest, call, put } from 'redux-saga/effects'

import { LOAD_VISITS, setVisit } from '../Actions/action';
import { getVisits } from '../API/apiCalls'



export function* LoadVisitsWatcher() {
    yield takeLatest(LOAD_VISITS, LoadVisitsApi)

}

function* LoadVisitsApi(action) {
    let visits = [];
    try {
        console.log("in saga loader visit")
        visits = yield call(getVisits, { action })
        yield put(setVisit(visits));
        console.log(visits)

    } catch (error) {
        console.log(error);
    }
}