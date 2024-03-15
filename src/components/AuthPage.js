import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { AuthContext } from './store/auth-context';

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Firebase authentication
            const response = await authCtx.login(email, password);
            if (response.error) {
                setError(response.error.message);
            } else {
                // Redirect to products page on successful login
                history.push('/products');
            }
        } catch (error) {
            console.error('Authentication Error:', error);
            setError('Authentication failed! Please try again.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default AuthPage;
