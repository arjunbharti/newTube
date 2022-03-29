import Header from "./Header"
import { Link } from 'react-router-dom'
import '../styles/login-and-signup.css'

const Login = () => {
  return (
    <>
        <Header />
        <main className="login-page">
            <form className="login-card flex-column">
                <p className="text-l login-heading">Login</p>
                <div className="login-input-field flex-column">
                    <label htmlFor="email" className="email-label">Email address</label>
                    <input   
                            type="email" 
                            name="email"
                            className="input-class"
                            placeholder="Enter your email here"
                    />
                </div>
                <div className="login-input-field flex-column">
                    <label htmlFor="password" className="password-label">Password</label>
                    <input 
                            type="password" 
                            name="password"
                            className="input-class"
                            placeholder="Enter your password"
                    />
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        id="remember-me" 
                    />
                    <label htmlFor="remember-me">Remember me</label>
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