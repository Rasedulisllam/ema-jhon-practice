import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProduct]=useState([])
    const [addCart,setAddCart]=useState([])
    const [displayProduct,setDisplayProduct]=useState([])

    useEffect( ()=>{
        fetch('../../products.Json')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setDisplayProduct(data);
            })
    },[])

    useEffect(()=>{
        const storedCart=getStoredCart();
        if(products.length){
            const MyaddCart=[]
            for(const key in storedCart){
                const findedProduct=products.find(product => product.key===key)
                findedProduct.count=storedCart[key];
                MyaddCart.push(findedProduct);
            }
            setAddCart(MyaddCart)  
        }
    },[products])

    const handleCartBtn=product=>{
            const newProduct=[...addCart,product];
            setAddCart(newProduct);
            addToDb(product.key);         
    }

    // handle input field
    const handleInputField=(e)=>{
        const searchText=e.target.value;
        const filteredProduct=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(filteredProduct)
    }

    return (
        <div>
            <div className="search-bar">
                <input type="text" onChange={handleInputField} />
            </div>
            <div className='shop'>  
                <div className="products-container">
                    {
                        displayProduct.map(product =><Product handleCartBtn={handleCartBtn} product={product} key={product.key}></Product> )
                    }
                </div>
                <div className="cart">
                    <Cart addCart={addCart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;