import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";
import useAuth from "../Hooks/useAuth";

export default function Shipping() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {user}=useAuth();
  const history=useHistory()

  const onSubmit = data => {
    const order=getStoredCart();
    data.order=order;
    const url=`http://localhost:5000/shipping`
    axios.post(url,{data})
      .then(res => {
        if(res.data.insertedId){
          alert('place ordered successfully')
          clearTheCart();
        }
      })
  };

  return (
   
    <form onSubmit={handleSubmit(onSubmit)} className='from-control' style={{width:'40%',margin:'1rem auto'}}>
      <h1>your shipping details</h1>
      <div style={{marginBottom:'.6rem'}}>
      <input defaultValue={user?.displayName} style={{marginBottom:'0'}} {...register("name",{ required: true })} />
      {errors.name && <small style={{color:'red'}}>This field is required</small>}
      </div>
      <div style={{marginBottom:'.6rem'}}>
      <input defaultValue={user?.email} style={{marginBottom:'0'}} {...register("email",{ required: true })} />
      {errors.email && <small style={{color:'red'}}>This field is required</small>}
      </div>
      <div style={{marginBottom:'.6rem'}}>
      <input placeholder="Your number" style={{marginBottom:'0'}} {...register("number",{ required: true })} />
      {errors.number && <small style={{color:'red'}}>This field is required</small>}
      </div>
      <div style={{marginBottom:'.6rem'}}>
      <input placeholder="city" style={{marginBottom:'0'}} {...register("city",{ required: true })} />
      {errors.city && <small style={{color:'red'}}>This field is required</small>}
      </div>
      <div style={{marginBottom:'.6rem'}}>
      <input placeholder="Address" style={{marginBottom:'0'}} {...register("address",{ required: true })} />
      {errors.address && <small style={{color:'red'}}>This field is required</small>}
      </div>
      
    <button type="submit" className="review-btn" >Place order</button>
    </form>
  );
}