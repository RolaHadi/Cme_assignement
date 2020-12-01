import { LOAD_RESTO_SEARCH, setResto } from '../Actions/action';
import { getRestosByPrefix } from '../API/apiCalls'
import { takeLatest, call, put } from 'redux-saga/effects'



export function* LoadRestoSearchWatcher() {
    console.log("in saga watch loader")
    yield takeLatest(LOAD_RESTO_SEARCH, LoadRestoSearchApi)

}

function* LoadRestoSearchApi(prefix) {
    let data;
    console.log("in saga loader")
    console.log(prefix.payload)
    try {
        data = yield call(getRestosByPrefix, prefix.payload);
        yield put(setResto(data));
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}