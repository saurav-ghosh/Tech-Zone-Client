import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://banana-surprise-11380.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <>
            <Header></Header>
            <div className="product-container">
                { 
                    products.length === 0 && <div className="spinner"><Spinner animation="border" variant="primary" /></div> 
                } 
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </>
    );
};

export default Home;