import { fork } from "redux-saga/effects";

import getData from "../reducers/saga";

export function* sagas() {
  yield fork(getData);
}
