import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({item: {name, quantity, price, imageUrl}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="card-item"/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} * $ {price}</span>
        </div>
    </div>
)

export default CartItem;