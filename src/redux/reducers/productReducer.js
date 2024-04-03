import { ActionTypes } from "../constants/action-type";

const productReducer = (currProductList = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_INITIAL_POST:
      return payload;
    case ActionTypes.ADD_PRODUCT:
      return [payload, ...currProductList];
    case ActionTypes.DELETE_POST:
      return currProductList.filter((product) => product.id !== payload);
    default:
      return currProductList;
  }
};

export default productReducer;