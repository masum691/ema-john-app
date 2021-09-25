import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        console.log('product api called')
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        });
    }, [])

    useEffect( () => {
        console.log('local storage called')
        if(products.length){
            const savedCart = getStoredCart();
            // console.log(savedCart)
            const storeCart = [];
            for(const key in savedCart){
                // console.log(products)
                const addedProduct = products.find(product => product.key === key);
                // console.log(key, addedProduct)
                if(addedProduct){
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity;
                    storeCart.push(addedProduct)
                }
            }
            setCart(storeCart);
        }
    }, [products])

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(product)
        addToDb(product.key)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key = {product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}>
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;