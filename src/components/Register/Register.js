import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div style={{width:'50%',margin:'1rem auto'}}>
            <h2>Register now</h2>
            <form className='from-control'>
                <label htmlFor="name"> Name</label>
                <input type='text' id='name' placeholder='your name'></input>
                <label htmlFor="email"> Email</label>
                <input type='email' id='email' placeholder='Enter email'></input>
                <label htmlFor="password">Password</label>
                <input type='password' id="password" placeholder='password'></input>
                <button style={{display:'inline-block', padding:'.5rem 1rem',cursor:'pointer', border:'1px solid #ddd'}} type="submit">Register</button>  
            </form>

            <h5>Alrady have Acount ? <Link to='/logIn'>logIn Now</Link></h5>
                <div>-------------------------- or ---------------------------</div>
                <button>join to google</button>
        </div>
    );
};

export default Register;