import { takeLatest, call, put } from 'redux-saga/effects'

import { ADD_VISIT, setVisit } from '../Actions/action';
import { postVisit } from '../API/apiCalls'



export function* AddVisitWatcher() {
    console.log("in add watcher")
    yield takeLatest(ADD_VISIT, AddVisitsApi)
}

function* AddVisitsApi(action) {
    console.log("in saga loader")

    try {
        console.log("in saga add visit")
        const visits = yield call(postVisit, action.payload)
        yield put(setVisit(visits));
        console.log(visits)

    } catch (error) {
        console.log(error);
    }
}