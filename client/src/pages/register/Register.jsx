import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom' 

function Register() {
  return (
    <div className='register__container'>
        <div className="register__card">
            <div className="register__card-left">

                <h1>Hi Friends</h1>
                <p>Inspired from the Indian Guy On Youtube!</p>
                <span>Do you have an account?</span>
                <Link to="/login">
                    <button className='register__card-left_button'>Login</button>
                </Link>

            </div>

            <div className="register__card-right">

                <h1>Register</h1>
                <form>
                    <input type="text" placeholder='Username'/>
                    <input type='email' placeholder='Email'/>
                    <input type="text" placeholder='Name'/>
                    <input type='password' placeholder='Password'/>
                    <button>Register</button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Register