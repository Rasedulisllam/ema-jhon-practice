// shopping cart price calculation function

const totalTex=itemPrice=>{
    const tex=itemPrice*10/100;
    const fixTex=tex.toFixed(2);
    return fixTex;
  }

// total price calculation
const totalPrice=(itemPrice,shippingCost)=>{
    const tex=totalTex(itemPrice);
    const totalPrice=parseFloat(itemPrice)+parseFloat(tex)+shippingCost;
    const fixTotal=totalPrice.toFixed(2)
    return fixTotal
}

  export {totalTex, totalPrice}