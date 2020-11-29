import { takeLatest, call, put } from 'redux-saga/effects'

import { LOAD_VISITS, setVisit } from '../Actions/action';
import { getVisits } from '../API/apiCalls'



export function* LoadVisitsWatcher() {
    yield takeLatest(LOAD_VISITS, LoadVisitsApi)
}

function* LoadVisitsApi(action) {
    let visits;
    console.log("in saga loader")

    try {
        console.log("in saga loader visit")
        visits = yield call(getVisits)
        yield put(setVisit(visits));
        console.log(visits)

    } catch (error) {
        console.log(error);
    }
}