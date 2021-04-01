import React from 'react';
import './Order.css';

const Order = (props) => {
    return (
        <div className="order-info">
            <div  className="order-product-name">
                <h5>{props.order.product.name}</h5>
            </div>
            <h5>${props.order.product.price}</h5>
            <h5>{props.order.date}</h5>
        </div>
    );
};

export default Order;