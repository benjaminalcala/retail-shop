import {cartActionTypes} from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})

export const decreaseItem = item => ({
    type: cartActionTypes.DECREASE_ITEM,
    payload: item
})

export const clearCartSuccess = () => ({
    type: cartActionTypes.CLEAR_CART_SUCCESS
})

