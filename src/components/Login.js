import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import LOGO from "../images/logo.png";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          alt="euphoria"
          src={LOGO}
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h4>E-mail</h4>
          <input type="text"/>
          <h4>Password</h4>
          <input type="password"/>
          <button className="login__signInButton">Sign In</button>
        </form>
        <p>

          By signing-in you agree to Euphoria's terms and conditions of Sale'
        </p>

        <button className="login__registerButton">Create your Account</button>





      </div>

    </div>
  )
};

export default Login;
