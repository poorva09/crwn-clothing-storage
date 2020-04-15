import React from 'react';
import { connect } from 'react-redux';

import { addCartItems, removeCartItems, clearCartItems } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, dispatch}) => {
    const {name, quantity, price, imageUrl} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='product_image'/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={() => dispatch(removeCartItems(cartItem))}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => dispatch(addCartItems(cartItem))}>&#10095;</span>
            </span>
            <span className="price">
                $ {price}
            </span>
            <div className="remove-item" onClick={() => dispatch(clearCartItems(cartItem))}>&#10005;</div>
        </div>
    )
}

export default connect(null)(CheckoutItem);