import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = props => {
    const {name,img,price,seller,stock,star}=props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <p>By: {seller}</p>
                <p>${price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star rating-icon"
                    fullSymbol="fas fa-star rating-icon"
                ></Rating>
                <br />
                <button 
                onClick={()=>props.handleCartBtn(props.product)}
                className='add-button' 
                >{cartIcon} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;