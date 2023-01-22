import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'
const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ' ',
    password: '',
    city: '',
    state: ''
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({ ...user, [name]: value });
  }

  const postData = async (event) => {
    event.preventDefault();

    try {

      const res = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      const data = await res.json();

      console.log(data);

      if (data.status === 400 || !data) {
        window.alert('Invalid registration');
      } else {
        window.alert('Registration successfull');
        navigate('/login');
      }
    } catch (err) {
      console.log(err);
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
                <p className="login-h3">Register</p>
                <p>Please enter your credentials to register.</p>
              </div>
            </div>
            <form className="login-form" method="POST">
              <input value={user.email} name="email" onChange={handleInput} type="email" placeholder="Email" />
              <input value={user.name} name="name" onChange={handleInput} type="text" placeholder="Name" />
              <input value={user.age} name="age" onChange={handleInput} type="number" placeholder="Age" />
              <input value={user.city} name="city" onChange={handleInput} type="text" placeholder="City" />
              <input value={user.state} name="state" onChange={handleInput} type="text" placeholder="State" />
              <input value={user.password} name="password" onChange={handleInput} type="password" placeholder="Password" />
              <button onClick={postData}>Register</button>
              <p className="message">Already have an Account? <NavLink to='/login'>Login</NavLink></p>
            </form>
          </div>
        </div>
      </div>


    </>
  )
}

export default Register