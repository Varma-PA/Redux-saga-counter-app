import { takeLatest, put, delay } from "redux-saga/effects";
import * as types from "../types";

// A watcher function
function* watchAgeGoUp() {
  yield takeLatest(types.COUNTER_UP, function* () {
    yield delay(1000);
    yield put({ type: types.COUNTER_UP_ASYNC });
  });
}

export { watchAgeGoUp };
