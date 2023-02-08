import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login__container'>
        <div className="login__card">
            <div className="login__card-left">

                <h1>Hello Friends</h1>
                <p>Inspired from the Indian Youtubers!</p>
                <span>Don't have an account?</span>
                <Link to="/register">
                    <button className='login__card-left_button'>Register</button>
                </Link>

            </div>
            
            <div className="login__card-right">

                <h1>Login</h1>
                <form>
                    <input type="text" placeholder='Username'/>
                    <input type='password' placeholder='Password'/>
                    <button>Login</button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Login