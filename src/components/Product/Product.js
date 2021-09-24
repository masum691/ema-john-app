import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {name, img,seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h5>{name}</h5>
                <p><small>{seller}</small></p>
                <p>{price}</p>
                <p>only {stock} left in stock - order soon</p>
            </div>
        </div>
    );
};

export default Product;