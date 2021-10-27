
import React from 'react';
import { useHistory } from 'react-router';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ReviewCart from '../ReviewCart/ReviewCart';

const OrderReview = () => {
    const [products,setProducts]=useProducts();
    const [cart,setCart]=useCart(products)
    const history=useHistory();

    const handleRemove=key=>{
      const newCart=cart.filter(x=> x.key!==key);
      setProducts(newCart);
      removeFromDb(key)
    }
    const handleOrderClick=()=>{
        history.push('/shipping')
        // setCart([]);
        // clearTheCart();
    }
   
    return (
        <div className='shop'>
            <div >
                {
                    cart.map(x=> <ReviewCart product={x} key={x.key} handleRemove={handleRemove}></ReviewCart>)
                }
            </div>
            <div className='cart'>
                <Cart addCart={cart} >
                    <button onClick={handleOrderClick} className="review-btn">Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;