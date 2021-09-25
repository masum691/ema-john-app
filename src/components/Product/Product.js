import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock , star} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
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
                <Rating className="text-warning mb-3"
                    initialRating={star}
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                ></Rating><br />
                <button onClick={() => props.handleAddToCart(props.product)} className="regular-btn">{cartIcon} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;