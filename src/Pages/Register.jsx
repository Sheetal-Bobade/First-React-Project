import React from 'react';
import '../App.css';
import Topheader from '../Component/Topheader';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import '../custom.css';

function Register(){
  
    return(
    <div className="App">
      <Topheader/>
      <Header/>
      <div className="my-account">
      <div className="registration">
      <h2>Registration</h2>
      <form> 
       <input type="email" id="email" name="email" placeholder="Email Address"/><br/><br/>
       <input type="password" id="password" name="password"  placeholder="Create Password"/><br/><br/>
       <button type="submit" class="btn">Register</button>
      </form> 
      <a href="/user-login">already have an account?</a>
      </div>
      
      </div>
      
      <Footer/>
    </div>
    );
}

export default Register;