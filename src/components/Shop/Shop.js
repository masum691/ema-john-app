import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [dispayProducts, setDisplayProducts] = useState([]);
    useEffect( () => {
        console.log('product api called')
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data);
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
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);
    }
    return (
        <div>
            <div className="bg-dark pt-3 pb-1">
                <div className="input-group mb-3 w-50 mx-auto">
                    <input
                     type="text"
                    onChange={handleSearch}
                     className="form-control" placeholder="Search product by name" aria-label="Search product by name" aria-describedby="button-addon2"/>
                    <button className="btn btn-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        <div className="shop-container">
            <div className="product-container">
                {
                    dispayProducts.map(product => <Product 
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
        </div>
    );
};

export default Shop;