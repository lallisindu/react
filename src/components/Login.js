import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import { doCreateUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the asynchronous function and wait for the result
      const idToken = await doCreateUserWithEmailAndPassword(email, password);

      // Ensure idToken is not undefined before proceeding
      if (idToken) {
        // Store the user's email in local storage
        localStorage.setItem(`token_${email}`, idToken);
  
        // Handle successful authentication
        console.log('Authenticated user with idToken:', idToken);
        const storedToken = localStorage.getItem(`token_${email}`);
  
        // Redirect to products page
        navigate('/');
    } else {
        console.error('ID token is undefined.');
      }
    } catch (error) {
        // Handle authentication failure
        if (error.code === 'auth/email-already-in-use') {
          // If email is already in use, redirect without showing error message
          navigate('/'); // Change 'another-page' to your desired URL
        } else if (error.code === 'auth/wrong-password') {
          // If wrong password, display error message
          setError('Incorrect email or password. Please try again.');
        } else {
          // Handle other authentication errors without showing message
          console.error('Authentication error:', error.message); // Log the error for debugging
          alert('Authentication failed. Please try again.'); // Generic message to the user
        }
      }
    };
      
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            ref={emailInputRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            ref={passwordInputRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message if exists */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
