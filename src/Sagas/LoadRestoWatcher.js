import { takeLatest, call, put } from 'redux-saga/effects'

import { LOAD_RESTO, setResto } from '../Actions/action';
import { getResto } from '../API/apiCalls'



export function* LoadRestoWatcher() {
    console.log("in saga watch loader")
    yield takeLatest(LOAD_RESTO, LoadRestoApi)

}

function* LoadRestoApi() {
    let data;
    console.log("in saga loader")

    try {
        data = yield call(getResto);
        yield put(setResto(data));
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}