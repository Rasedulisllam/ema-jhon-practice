import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

import './Login.css'

const LogIn = () => {
    const {googleSignIn}=useAuth()
    const location =useLocation()
    const history =useHistory()
    const redirectUrl=location.state?.from || '/';

    const handleGoogleSignIn=()=>{
        googleSignIn()
            .then(()=>{
               history.push(redirectUrl)
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div style={{width:'50%',margin:'1rem auto'}}>
            <h2>Plasse LogIn</h2>
            <form className='from-control'>
                <label htmlFor="email"> Email</label>
                <input type='email' id='email' placeholder='Enter email'></input>
                <label htmlFor="password">Password</label>
                <input type='password' id="password" placeholder='password'></input>
                <button style={{display:'inline-block', padding:'.5rem 1rem',cursor:'pointer', border:'1px solid #ddd'}} type="submit">Login</button>  
            </form>

            <h5>New ot ema-jhon ? <Link to='/register'>Create Acount</Link></h5>
                <div>-------------------------- or ---------------------------</div>
                <button onClick={handleGoogleSignIn}>join to google</button>
        </div>
    );
};

export default LogIn;