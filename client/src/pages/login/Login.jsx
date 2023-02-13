import React, { useContext } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../components/context/authContext'

function Login() {

    const {login} = useContext (AuthContext);
    const handleLogin = () => {
        login();
    }


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
                    <button onClick={handleLogin}>Login</button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Login