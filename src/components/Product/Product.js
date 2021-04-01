import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const {_id,image, name, price} = props.product;

    return (
        <Container>
            <div className="single-product">
                <div className="image">
                    <img src={image} alt=""/>
                </div>
                <div className="product-name">
                    <h5>{name}</h5>
                </div>
                <div className="product-price">
                    <h4>${price}</h4>
                    <Link to={"/checkout/"+ _id}>
                        <button>Buy Now</button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Product;