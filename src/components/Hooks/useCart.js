import { useState } from "react";
import { useEffect } from "react";
import { getStoredCart } from "../../utilities/fakedb"

const useCart=products=>{
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        if(products.length){
            const selectProducts=getStoredCart();
            const saveProducts=[];
            for(const key in selectProducts){
                const findedProduct=products.find(product=> product.key===key)
                if(findedProduct){
                    const quantity=selectProducts[key];
                    findedProduct.count=quantity;
                    saveProducts.push(findedProduct);
                }
            }
            setCart(saveProducts)
        }
    },[products])
    return [cart,setCart]
}

export default useCart;