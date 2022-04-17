import React from 'react'
import '../styles/login-and-signup.css'
import Header from './Header'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
        <Header />
        <main className="login-page">
            <form className="signup-card flex-column">
                <p className="text-l login-heading">Sign up</p>
                <div className="login-input-field flex-column"> 
                    <label for="first-name" className="name-label">First Name</label> 
                    <input 
                        type="text" 
                        id="first-name" 
                        className="input-class" 
                        placeholder="Enter your first name here" 
                    /> 
                </div> 
                <div className="login-input-field flex-column"> 
                    <label for="last-name" className="name-label">Last Name</label> 
                    <input 
                        type="text" 
                        id="last-name" 
                        className="input-class" 
                        placeholder="Enter your last name here"
                    /> 
                </div>
                <div className="login-input-field flex-column">
                    <label for="email" className="email-label">Email address</label>
                    <input   
                        type="email" 
                        id="email"
                        className="input-class"
                        placeholder="Enter your email here"
                    />
                </div>
                <div className="login-input-field flex-column">
                    <label for="password" className="password-label">Password</label>
                    <input 
                        type="password" 
                        className="input-class"
                        placeholder="Enter your password"
                    />
                </div>
                <a className="btn-login">Sign up</a>
                <Link className="signup-btn" to="/login">Already have an account?  <br />Login Now </Link>
            </form>
        </main>
    </>
  )
}

export default Signup