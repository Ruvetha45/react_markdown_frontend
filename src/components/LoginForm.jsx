import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ loginFormData, setLoginFormData, setIsRegistered, setToken, setUser }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log('Logging in user...');
    const response = await fetch('https://react-markdown-backend-3jw4.onrender.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginFormData),
    });

    const data = await response.json();

    if (response.status === 200) {
      console.log('User logged in successfully');
      console.log(data);
      setLoginFormData({
        username: '',
        password: '',
      });

      setToken(data.token);
      setUser(data);

      window.localStorage.setItem('token', data.token);
      window.localStorage.setItem('user', JSON.stringify(data));
    } else {
      console.log('Error logging in user');
      console.log(data);
      // Update the error message state
      setErrorMessage('Incorrect username or password. Please try again.');
    }
  };

  return (
    <div className='loginContainer'>
      <div className='loginFormDiv'>
        <img
          className='loginTextImage'
          src='https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150310009.jpg?size=626&ext=jpg&ga=GA1.1.1880903415.1682522234&semt=ais'
          alt='textImage'
        />
        <form className='loginForm' onSubmit={handleLogin}>
          <div>
            <input
              className='loginInput'
              type='email'
              placeholder='Email...'
              value={loginFormData.username}
              onChange={(e) => setLoginFormData({ ...loginFormData, username: e.target.value })}
              required
            />
          </div>

          <div>
            <input
              className='loginInput'
              type='password'
              placeholder='Password...'
              value={loginFormData.password}
              onChange={(e) => setLoginFormData({ ...loginFormData, password: e.target.value })}
              required
            />
          </div>

          <button className='loginButton' type='submit'>
            Login
          </button>

          {/* Display error message if exists */}
          {errorMessage && <p className='error'>{errorMessage}</p>}

          <p className='notRegistered'>
            Not Registered? <button className='registerButton' onClick={() => setIsRegistered(false)}>Register</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
