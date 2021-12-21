import { fork, take, call, put } from "redux-saga/effects";

import * as Actions from "./actions";

export const getProductsApi = (count: number) =>
  fetch(`https://fakestoreapi.com/products?limit=${count}`)
    .then((res) =>
      res
        .json()
        .then((data) => (res.ok ? { response: data } : { error: data.error }))
    )
    .catch((error) => ({ error }));

export function* getProducts(count: number) {
  const { response, error } = yield call(getProductsApi, count);
  if (!error) {
    yield put(Actions.getDataSuccess(response));
  } else {
    yield put(Actions.getDataFailure(error));
  }
}
export function* getProductsRequest() {
  while (true) {
    const { count } = yield take(Actions.GET_DATA_REQUEST);
    yield call(getProducts, count);
  }
}

//Симуляция реального удаления
export const deleteProductsApi = (id: number) =>
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) =>
      res
        .json()
        .then((data) => (res.ok ? { response: data } : { error: data.error }))
    )
    .catch((error) => ({ error }));

export function* deleteProducts(id: number) {
  const { response, error } = yield call(deleteProductsApi, id);
  if (!error) {
    yield put(Actions.deleteDataSuccess(response));
  } else {
    yield put(Actions.deleteDataFailure(error));
  }
}
export function* deleteProductsRequest() {
  while (true) {
    const { id } = yield take(Actions.DELETE_DATA_REQUEST);
    yield call(deleteProducts, id);
  }
}

export default function* startup() {
  yield fork(getProductsRequest);
  yield fork(deleteProductsRequest);
}
