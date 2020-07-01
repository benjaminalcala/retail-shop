import {createSelector} from 'reselect';


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsQuantity = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItem) => cartItem.quantity + acc , 0)

)

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItem)=> cartItem.quantity * cartItem.price + acc ,0)
)