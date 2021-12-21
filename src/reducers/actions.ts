import { TProduct } from "./types";

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const DELETE_DATA_REQUEST = "DELETE_DATA_REQUEST";
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
export const DELETE_DATA_FAILURE = "DELETE_DATA_FAILURE";

export const getDataRequest = (count: number) => {
  return {
    type: GET_DATA_REQUEST,
    count,
  };
};

export const getDataSuccess = (data: TProduct[]) => {
  return {
    type: GET_DATA_SUCCESS,
    data,
  };
};

export const getDataFailure = (error: any) => {
  return {
    type: GET_DATA_FAILURE,
    error,
  };
};

export const deleteDataRequest = (id: number) => {
  return {
    type: DELETE_DATA_REQUEST,
    id,
  };
};

export const deleteDataSuccess = (data: TProduct) => {
  return {
    type: DELETE_DATA_SUCCESS,
    data,
  };
};

export const deleteDataFailure = (error: any) => {
  return {
    type: DELETE_DATA_FAILURE,
    error,
  };
};
