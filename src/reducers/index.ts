import * as Actions from "./actions";
import { TState } from "./types";

const InitialState: TState = {
  products: [],
  isPending: false,
};

export const reducer = (state: TState = InitialState, action: any): TState => {
  switch (action.type) {
    case Actions.GET_DATA_SUCCESS:
      return {
        ...state,
        products: action.data,
        isPending: false,
      };
    case Actions.GET_DATA_FAILURE:
      return {
        ...state,
        isPending: false,
      };
    case Actions.GET_DATA_REQUEST:
      return {
        ...state,
        isPending: true,
      };
    case Actions.DELETE_DATA_SUCCESS:
      return {
        ...state,
        products: state.products.filter((elem) => elem.id !== action.data.id),
        isPending: false,
      };
    case Actions.DELETE_DATA_FAILURE:
      return {
        ...state,
        isPending: false,
      };
    case Actions.DELETE_DATA_REQUEST:
      return {
        ...state,
        isPending: true,
      };
    default:
      return state;
  }
};
