import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Form.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/users/signup', { username, email, password });
            setMessage('Registration successful! You can now login.');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setMessage(error.response.data.message);
            } else {
                setMessage('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required />
                <button type="submit">Register</button>
                {message && <p className="message">{message}</p>}
                <p><Link to="/login">Already have an account? Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;
