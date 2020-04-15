import { cartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItems = (cartItem) => ({
    type: cartActionTypes.ADD_CART_ITEM,
    payload: cartItem
});

export const removeCartItems = (cartItem) => ({
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: cartItem
})

export const clearCartItems = (cartItem) => ({
    type: cartActionTypes.CLEAR_CART_ITEM,
    payload: cartItem
})