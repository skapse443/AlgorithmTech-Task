import react from "react";
import "./App.css";

function Login({setPage}){
    return(
    <div className="login-page">

        <div className="login-card">
            
            <h1>Welcome Back!</h1>
            <p>Register to your Tasty Bites account</p>
            <form>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your Email" required></input>
                </div>

                 <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your Password" required></input>
                </div>

                <button type="submit" className="login-submit">Login</button>
            </form>

            <p className="register-text">Don't have an account?
                <a href="/register">Register</a>
            </p>

            <button type="button"  className="back-home" onClick={() => setPage("home")} > ← Back to Home  </button>
        </div>

    </div>

);
}

export default Register;