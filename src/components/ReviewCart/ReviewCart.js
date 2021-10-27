import React from 'react';
import Rating from 'react-rating';

const ReviewCart = props => {
    const {name,seller,price,stock,key,star}=props.product;
    
   
    return (
        <div className="product">
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
                className='add-button' 
                onClick={()=>props.handleRemove(key)}
                >Remove cart</button>
            </div>
        </div>
    );
};



export default ReviewCart;