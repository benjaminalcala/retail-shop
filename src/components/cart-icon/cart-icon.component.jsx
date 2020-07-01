import React from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCartItemsQuantity} from '../../redux/cart/cart.selectors'

import {toggleCartHidden} from '../../redux/cart/cart.actions'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, quantity}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{quantity}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    quantity: selectCartItemsQuantity
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);