import { LOAD_RESTO_TYPE, setResto } from '../Actions/action';
import { getRestosByType } from '../API/apiCalls'
import { takeLatest, call, put } from 'redux-saga/effects'



export function* LoadRestoTypeWatcher() {
    console.log("in saga watch loader")
    yield takeLatest(LOAD_RESTO_TYPE, LoadRestoTypeApi)

}

function* LoadRestoTypeApi(type) {
    let data;
    console.log("in saga loader")

    try {
        data = yield call(getRestosByType, type.payload);
        yield put(setResto(data));
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}