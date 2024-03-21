import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await doCreateUserWithEmailAndPassword(email, password);
      // Redirect the user to another page upon successful sign-up
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        // Handle the scenario where the email already exists
        setError('Email already exists. Please sign in instead.');
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Sign In</Link></p>
    </div>
  );
};

export default SignUp;
