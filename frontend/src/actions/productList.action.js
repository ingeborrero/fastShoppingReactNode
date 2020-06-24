import axios from 'axios';
import {
  GET_PRODUCT_LIST,
  ADD_TO_CART,
  LOADING,
} from '../types/productList.type';
import { API_SHOPPING_NODEJS } from '../config/config';

export const getProductsAction = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: true });
    const response = await axios.get(`${API_SHOPPING_NODEJS}/api/getProducts`);
    if (response.status === 200) {      
      dispatch({ type: GET_PRODUCT_LIST, payload: response.data });
    }
    dispatch({ type: LOADING, payload: false });
  } catch (error) {
    console.error(error);
  }
};

export const addToCartAction = (data) => (dispatch, getState) => {
  const { productlist: { cart } } = getState();
  cart.push(data);
  dispatch({ type: ADD_TO_CART, payload: cart });
};
