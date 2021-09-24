import React from 'react';
import './Cart.css'
import { totalTex,totalPrice,} from '../../utilities/CartTotal';

const Cart = props => {
    const {addCart}=props

    // count total  calculation
    let totalProductCount=0;
    addCart.forEach(product=>{
        product.count=!product.count?1:product.count;
        // console.log(product.count)
        totalProductCount+=product.count;
    })

    // calculate item total price
    const itemTotalPrice=addCart.reduce((prev,product)=>prev+(product.price*product.count),0);
    let ShippingCost=itemTotalPrice?20:0;
    ShippingCost=itemTotalPrice>1000?30:ShippingCost;
    const TotalTex=totalTex(itemTotalPrice);

    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items ordered: {totalProductCount}</p>
            <table className='price-table'>
                <tbody>
                    <tr>
                        <td>Items:</td>
                        <td>$ {itemTotalPrice.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping and handling:</td>
                        <td>$ {ShippingCost}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tex:</td>
                        <td>$ {TotalTex}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="total-price">
                        <td>Order Total:</td>
                        <td>$ {totalPrice(itemTotalPrice,ShippingCost)}</td>
                    </tr>
                </tfoot>
            </table>
            <button className="review-btn">Review your order</button>
        </div>
    );
};

export default Cart;