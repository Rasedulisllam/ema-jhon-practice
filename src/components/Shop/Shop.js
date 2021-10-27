import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProduct]=useState([])
    const [addCart,setAddCart]=useState([])
    const [displayProduct,setDisplayProduct]=useState([])
    const [pageCount,setPageCount]=useState(0)
    const [page,setPage]=useState(0)
    const size=10;


    useEffect( ()=>{
        axios.get(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => {
                setProduct(res.data.result);
                setDisplayProduct(res.data.result);
                const count=res.data.count;
                const pageCount=Math.ceil(count/size);
                setPageCount(pageCount);
            })
    },[page])

    useEffect(()=>{
        const storedCart=getStoredCart();
        const keys=Object.keys(storedCart);
        axios.post("http://localhost:5000/products/keys",{keys})
            .then(res => {
                // console.log(res.data)
                const products=res.data;
                if(products.length){
                    const MyaddCart=[]
                    for(const key in storedCart){
                        const findedProduct=products.find(product => product.key===key)
                        if(findedProduct){
                            findedProduct.count=storedCart[key];
                            MyaddCart.push(findedProduct);
                        }
                    }
                    setAddCart(MyaddCart)  
                }
            })
    },[])

    const handleCartBtn=product=>{
            const exist=addCart.find(x=>x.key===product.key)
            let newProduct=[]
            if(exist){
               const provProducts=addCart.filter(pd => pd.key !==product.key);
               product.count=exist.count+1;
               newProduct=[...provProducts,product]
            }
            else{
                product.count=1;
                newProduct=[...addCart,product];
            }
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
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(number=> <button
                                style={{margin:'.4rem',padding:'.3rem .6rem',cursor:'pointer'}}
                                className={number===page?"selected":''}
                                onClick={()=> setPage(number)}
                                key={number}
                                >
                                {number+1}
                                </button>)
                        }
                    </div>
                </div>
                <div className="cart">
                    <Cart addCart={addCart}>
                        <Link to='/review'>
                            <button className="review-btn">Review order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;