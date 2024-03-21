import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from '../firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const [isSignup, setIsSignup] = useState(false); // State to track signup mode
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSignup = async () => {
    try {
      const idToken = await doCreateUserWithEmailAndPassword(email, password);
      if (idToken) {
        localStorage.setItem(`${email}`, idToken);
        authCtx.setUserEmail(email);
        console.log('Authenticated user with idToken:', idToken);
        navigate('/products');
      } else {
        console.error('ID token is undefined.');
      }
    } catch (error) {
      console.error('Signup error:', error.message);
      setError(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const idToken = await doSignInWithEmailAndPassword(email, password);
      if (idToken) {
        localStorage.setItem(`${email}`, idToken);
        authCtx.setUserEmail(email);
        console.log('Authenticated user with idToken:', idToken);
        navigate('/products');
      } else {
        console.error('ID token is undefined.');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      setError(error.message);
      // If the error is related to non-existing email, switch to signup mode
      if (error.code === 'auth/user-not-found') {
        setIsSignup(true);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      handleSignup();
    } else {
      handleLogin();
    }
  };

  return (
    <div>
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            ref={emailInputRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            ref={passwordInputRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
      </form>
      {!isSignup && (
        <p>
          Don't have an account?{' '}
          <button onClick={() => setIsSignup(true)}>Sign Up</button>
        </p>
      )}
    </div>
  );
};

export default Login;
