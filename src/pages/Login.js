import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import { Link } from 'react-router-dom';
import { useNavigate, Navigate } from 'react-router-dom';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = ( e ) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate('/');
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">E-mail</label>
            <input
                name="email"
                type="email"
                id="email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
        />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            />
        </div>
        <button type="submit">Login</button>
    </form>
    <Link to="/signup">Sign Up</Link>
    </>
  );
};

export default Login;