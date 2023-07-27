import React from "react";
import './App.css';
import Topheader from './Component/Topheader';
import Header from './Component/Header';
import Footer from './Component/Footer';
import './custom.css';

function Login(){
  
    return(
    <div className="App">
      <Topheader/>
      <Header/>
      <div className="my-account">
      <div className="registration">
      <h2>Login</h2>
      <form> 
       <input type="email" id="emailLogin" name="emailLogin" placeholder="Email Address"/><br/><br/>
       <input type="password" id="passwordLogin" name="passwordLogin" placeholder="Password"/><br/><br/>
       <input type="submit" value="Login"/>
      </form> 
      <a href="/my-account">New user? Create an account</a>
      </div>
      </div>
      
      <Footer/>
    </div>
    );
}

export default Login;