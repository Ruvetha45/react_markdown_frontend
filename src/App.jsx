import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import LoggedInPage from './components/LoggedInPage';
import WelcomePage from './components/WelcomePage';



function App() {
  const [registerFormData, setRegisterFormData] = useState({
    username: '',
    name: '',
    password: '',
  });

  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: '',
  });
  
  const [isRegistered, setIsRegistered] = useState(null);

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const handleLoginClick = () => {
    setIsRegistered(true);
  };

  const handleRegisterClick = () => {
    setIsRegistered(false);
  };

  return (
    <div>
      {isRegistered === null ? (
        <WelcomePage onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
      ) : (
        <>
          {user ? (
            <LoggedInPage
              user={user}
              setUser={setUser}
              token={token}
              setToken={setToken}
              isRegistered={isRegistered}
              setIsRegistered={setIsRegistered}
            />
          ) : isRegistered ? (
            <LoginForm
              loginFormData={loginFormData}
              setLoginFormData={setLoginFormData}
              isRegistered={isRegistered}
              setIsRegistered={setIsRegistered}
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
            />
          ) : (
            <RegisterForm
              registerFormData={registerFormData}
              setRegisterFormData={setRegisterFormData}
              isRegistered={isRegistered}
              setIsRegistered={setIsRegistered}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
