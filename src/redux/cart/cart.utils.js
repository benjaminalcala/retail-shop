export const addItemToCart = (existingCart, cartItemToAdd) => {
    const existingItem = existingCart.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingItem){
        return existingCart.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...existingCart, {...cartItemToAdd, quantity: 1}]
}

export const decreaseItem = (existingCart, cartItemToDecrease) => {
    const existingItem = existingCart.find(cartItem => cartItem.id === cartItemToDecrease.id);

    if(existingItem.quantity === 1){
        return existingCart.filter(cartItem => cartItem.id !== cartItemToDecrease.id)
    }

    return existingCart.map(cartItem => 
        cartItem.id === cartItemToDecrease.id
        ?{...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
}