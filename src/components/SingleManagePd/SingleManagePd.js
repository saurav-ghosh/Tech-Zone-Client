import React from 'react';
import './SingleManagePd.css';
import deleteImg from '../../icon/delete.png';

const SingleManagePd = (props) => {
    const {name, price, _id} = props.product;

    const deleteProduct = id => {
        fetch(`https://banana-surprise-11380.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('product deleted successfully');
            }
        })
    }

    return (
        <div className="single-manage-product">
            <div className="singleM-name">
                <h5>{name}</h5>
            </div>
            <div className="singleM-Price">
                <h5>${price}</h5>
            </div>
            <img onClick={() => deleteProduct(_id)} src={deleteImg} alt=""/>
        </div>
    );
};

export default SingleManagePd;