import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart], 
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumualtedQuantity, cartItems) => 
    accumualtedQuantity + cartItems.quantity
    , 0)
)

export const selectHideCart = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => 
    cartItems.reduce( (accumulatedTotal, cartItem) => 
        accumulatedTotal + (cartItem.price * cartItem.quantity)
    , 0)
)