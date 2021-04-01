import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { userContext } from '../../App';
import Header from '../Header/Header';
import Order from '../Order/Order';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://banana-surprise-11380.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <Container>
                <h1 style={{textAlign: 'center', color: 'rgb(70, 70, 70)'}}>You have {orders.length} orders</h1>
                {
                    orders.map(order => <Order key={order._id} order={order}></Order>)
                }
            </Container>
        </div>
    );
};

export default Orders;