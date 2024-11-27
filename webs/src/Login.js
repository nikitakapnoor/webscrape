import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import './Form.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('http://localhost:3000/users/login', { email, password });
            setMessage('Login successful!');
            localStorage.setItem('token', response.data.token);
            window.location = '/dashboard'; // Adjust as necessary
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setMessage('Invalid email or password');
            } else {
                setMessage('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="email" class="block text-sm/6 font-medium text-gray-900" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" class="block text-sm/6 font-medium text-gray-900" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit"class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                {message && <p className="message">{message}</p>}
                <p class="mt-10 text-center text-sm/6 text-gray-500"><Link to="/signup">Register a new account</Link></p>
            </form>
        </div>
    );
};

export default Login;
