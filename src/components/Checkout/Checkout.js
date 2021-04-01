import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import Header from '../Header/Header';
import './Checkout.css';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const {productId} = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://banana-surprise-11380.herokuapp.com/product/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [productId])

    const handlePlaceOrder = () => {
        let today = new Date().toLocaleDateString();
        const orderDetails = {
            email: loggedInUser.email,
            product: product,
            date: today
        };

        fetch('https://banana-surprise-11380.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('your order placed successfully')
            }
        })
    }

    return (
        <Container>
            <Header></Header>
            <div className="checkout-product">
                <h2>Checkout</h2>
                <div className="checkout-product-container">
                    <div className="checkout-product-txt">
                        <p>Description</p>
                        <p>Quantity</p>
                        <p>Price</p>
                    </div>
                    <hr/>
                    <div className="checkout-product-detail">
                        <div className="checkout-product-name">
                            <h5>{product.name}</h5>
                        </div>
                        <h5>1</h5>
                        <h5>${product.price}</h5>
                    </div>
                    <hr/>
                    <div className="total-cost">
                        <h5>total</h5>
                        <h5>${product.price}</h5>
                    </div>
                </div>
                <button onClick={handlePlaceOrder} className="checkout-btn">Place Order</button>
            </div>
        </Container>
    );
};

export default Checkout;