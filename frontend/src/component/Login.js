import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { userContext } from '../App';
import './Login.css'
const Login = () => {

  const navigate = useNavigate();
  const { state, dispatch } = useContext(userContext);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const inputEvent = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const loginUser = async (event) => {
    event.preventDefault();

    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    const data = res.json();
    console.log(data);

    if (res.status === 400 || !data) {
      window.alert('Invalid credentials');
    } else {
      dispatch({ type: 'USER', payload: true });
      window.alert('Login Successful');
      navigate('/');
    }

  }

  return (
    <>
      <div className="Login">
        <div className="welcome">
          <span>WELCOME</span><br /><span>TO</span><br /><span>CURAE!</span>
        </div>
        <div className="login-page">
          <div className="form">
            <div className="login">
              <div className="login-header">
                <p className="login-h3">LOGIN</p>
                <p>Please enter your credentials to login.</p>
              </div>
            </div>
            <form className="login-form" method='POST'>
              <input value={user.email} onChange={inputEvent} name="email" type="email" placeholder="Email" />
              <input value={user.password} onChange={inputEvent} name="password" type="password" placeholder="Password" />
              <button onClick={loginUser}>login</button>
              <p className="message">Not registered? <NavLink to='/register'>Create an account</NavLink></p>
            </form>
          </div>
        </div>
      </div>


    </>
  )
}

export default Login