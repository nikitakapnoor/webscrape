import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/" exact element={<Login/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
