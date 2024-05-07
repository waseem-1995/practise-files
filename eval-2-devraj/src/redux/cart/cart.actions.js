// Cart Actions here
import {
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_ERROR,
  UPDATE_CART_ITEMS_LOADING,
  UPDATE_CART_ITEMS_SUCCESS,
  UPDATE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
  RESET_CART_ITEMS,
} from "./cart.types";

export const cartItemsLoading = () => ({
  type: GET_CART_ITEMS_LOADING,
});

export const cartItemsSuccess = () => ({
  type: GET_CART_ITEMS_SUCCESS,
});

export const cartItemsError = () => ({
  type: GET_CART_ITEMS_ERROR,
});

export const addToCartLoading = () => ({
  type: ADD_ITEM_TO_CART_LOADING,
});

export const addToCartSuccess = () => ({
  type: ADD_ITEM_TO_CART_SUCCESS,
});

export const addToCartError = () => ({
  type: ADD_ITEM_TO_CART_ERROR,
});

export const updateItemLoading = () => ({
  type: UPDATE_CART_ITEMS_LOADING,
});

export const updateItemSuccess = () => ({
  type: UPDATE_CART_ITEMS_SUCCESS,
});

export const updateItemError = () => ({
  type: UPDATE_CART_ITEMS_ERROR,
});
export const removeItemLoading = () => ({
  type: REMOVE_CART_ITEMS_LOADING,
});
export const removeItemSuccess = () => ({
  type: REMOVE_CART_ITEMS_SUCCESS,
});
export const removeItemError = () => ({
  type: REMOVE_CART_ITEMS_ERROR,
});
export const resetCart = () => ({
  type: RESET_CART_ITEMS,
});
