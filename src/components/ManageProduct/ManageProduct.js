import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import SingleManagePd from '../SingleManagePd/SingleManagePd';
import './ManageProduct.css';

const ManageProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://banana-surprise-11380.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <Container>
            <div>
                <Button className="admin-btn" as={Link} to="/home" variant="primary">Home</Button>
                <Button className="admin-btn" as={Link} to="/admin" variant="primary">Add Product</Button>
            </div>
            <h3 className="manage-product-txt">Manage Product</h3>
            <div className="manage-product-container">
                <div className="manageProduct-header">
                    <p>Product Name</p>
                    <p>Price</p>
                    <p>Action</p>
                </div>
                <div className="manage-product-container">
                    {
                        products.map(product => <SingleManagePd key={product._id} product={product}></SingleManagePd>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default ManageProduct;