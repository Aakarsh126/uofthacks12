import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Importing CSS

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3738/api/users/login', { email, password });
            localStorage.setItem('token', response.data.token);
            alert('Login Successful!');
            navigate('/home');
        } catch (error) {
            alert(error.response.data.message || 'Login failed');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">Welcome to RoastMe!</h1>
                <form onSubmit={handleLogin} className="login-form">
                    <input
                        className="login-input"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="login-input"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="signup-link">New here? <a href="/register">Sign up now!</a></p>
            </div>
        </div>
    );
};

export default Login;
