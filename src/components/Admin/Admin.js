import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Admin.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Admin = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit } = useForm();

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '9b47112ad80a837b5cf2ee77c729dc51');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
        });
    }

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            image: imageURL
        }

        const url = 'https://banana-surprise-11380.herokuapp.com/addProduct';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(result => {
            if(result){
                alert('product added successfully')
            }
        })
    };

    return (
        <Container>
            <div>
                <Button className="admin-btn" as={Link} to="/home" variant="primary">Home</Button>
                <Button className="admin-btn" as={Link} to="/manageProduct" variant="primary">Manage Product</Button>
            </div>
            <div>
                <h3 className="add-product-txt">Add Product</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="add-product">
                    
                    <h5>Product Name: </h5>
                    <input name="name" placeholder="Enter product name"  ref={register} />
                    <h5>Add Price: </h5>
                    <input name="price" placeholder="Enter product Price" ref={register} />
                    <h5>Add Photo: </h5>
                    <input type="file" onChange={handleImageUpload}/>

                    {imageURL === null 
                        ? <p style={{color: 'red'}}>please wait while image is preparing for upload</p>
                        : <p style={{color: 'green'}}>image is ready for upload</p>}
                    
                    <input className="product-save" type="submit" value="Save"/>
                </form>
            </div>
        </Container>
    );
};

export default Admin;