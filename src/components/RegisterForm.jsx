import './RegisterForm.css';

const RegisterForm = ({ registerFormData, setRegisterFormData, isRegistered, setIsRegistered }) => {

    const handleRegister = async (e) => {
    e.preventDefault();

    const registerBody = {
      username: registerFormData.username,
      name: registerFormData.name,
      password: registerFormData.password
    };


    console.log('Registering user...');
    const response = await fetch('https://react-markdown-backend-3jw4.onrender.com/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerBody)
    });

    const data = await response.json();

    if (response.status === 200) {
      console.log('User created successfully');
      console.log(data);
      setRegisterFormData({
        username: '',
        name: '',
        password: ''
      });
      setIsRegistered(true);
    } else {
      console.log('Error creating user');
      console.log(data);
    }
  }

    return (
      <div className='registerContainer'>
              
      <div className='registerFormDiv'>
      <img className='registerTextImage' src="https://img.freepik.com/free-vector/editing-body-text-concept-illustration_114360-5671.jpg?size=626&ext=jpg&ga=GA1.1.1880903415.1682522234&semt=ais" alt="textImage" />
        <form className='registerForm' onSubmit={handleRegister}>
          <div>
            <input className='registerInput'
              type='email'
              placeholder='Email...'
              value={registerFormData.username}
              onChange={(e) => setRegisterFormData({...registerFormData, username: e.target.value})}
              required
            />
          </div>

          <div>
            <input className='registerInput'
              type='text'
              placeholder='Full Name...'
              value={registerFormData.name}
              onChange={(e) => setRegisterFormData({...registerFormData, name: e.target.value})}
              required
            />
          </div>

          <div>
            <input className='registerInput'
              type='password'
              placeholder='Password...'
              value={registerFormData.password}
              onChange={(e) => setRegisterFormData({...registerFormData, password: e.target.value})}
              required
            />
          </div>

          <button className='registerButton' type='submit'>Register</button>
        
          <p className='registered'>Already Registered? <button className='loginButton' onClick={() => setIsRegistered(true)}>Login</button></p>
        </form>

        
      </div>
      </div>
    )
}

export default RegisterForm;