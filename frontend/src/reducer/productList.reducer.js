import {
  GET_PRODUCT_LIST,
  ADD_TO_CART,
  LOADING,
} from '../types/productList.type';

const INITIAL_STATE = {
  loading: false,
  products: [],
  cart: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };      
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };      
    default:
      return state;
  }
};
