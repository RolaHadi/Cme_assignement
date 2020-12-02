import { takeLatest, call, put } from 'redux-saga/effects'
import { LOAD_RESTO, setResto, setNumberPage } from '../Actions/action';
import { getResto } from '../API/apiCalls'



export function* LoadRestoWatcher() {
    console.log("in saga watch loader")
    yield takeLatest(LOAD_RESTO, LoadRestoApi)

}

function* LoadRestoApi(page) {
    let data;

    console.log("in saga page loader")

    try {
        data = yield call(getResto, page.payload);
        yield put(setResto(data.content));
        yield put(setNumberPage(data.totalPages));
        console.log("in watcher" + data.totalPages);
    } catch (error) {
        console.log(error);
    }
}