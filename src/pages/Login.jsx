import React, { useState } from 'react';
import Header from "./Header"
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login-and-signup.css'
import { useAuth } from "../context/auth-context"
import { loginHandler } from '../services/auth';

const formInitialState = {
    email: '',
    password: '',
}

const Login = () => {
    const [formData, setFormData] = useState(formInitialState);
    const { email, password } = formData;
    const { saveUserInfo } = useAuth();
    const navigate = useNavigate();

    const inputHandler = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }))
    }

  return (
    <>
        <Header />
        <main className="login-page">
            <form 
                onSubmit={(e) => loginHandler({
                    e,
                    email,
                    password,
                    saveUserInfo,
                    setFormData,
                    navigate,
                    formInitialState
                })}
                className="login-card flex-column">
                <p className="text-l login-heading">Login</p>
                <div className="login-input-field flex-column">
                    <label htmlFor="email" className="email-label">Email address</label>
                    <input   
                            type="email" 
                            name="email"
                            className="input-class"
                            placeholder="Enter your email here"
                            onChange={inputHandler}
                            value={email}
                    />
                </div>
                <div className="login-input-field flex-column">
                    <label htmlFor="password" className="password-label">Password</label>
                    <input 
                            type="password" 
                            name="password"
                            className="input-class"
                            placeholder="Enter your password"
                            onChange={inputHandler}
                            value={password}
                    />
                </div>
                <a className="forgot-password" href="#">Forgot your password?</a>
                <button type='submit' className="btn-login text-sm">Login</button>
                <Link className="signup-btn" to="/signup">Create new account</Link>
            </form>
        </main>
    </>
  )
}

export default Login