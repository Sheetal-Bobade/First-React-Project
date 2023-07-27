import React, { useEffect, useRef, useState } from "react";
import './App.css';
import Topheader from './Component/Topheader';
import Header from './Component/Header';
import Footer from './Component/Footer';

import { database } from './firebase';
import {ref,push,child,update} from "firebase/database";
import './custom.css';

function MyAccount(){
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    let data = {
      email,password
    }
    if(id === "reg-email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    
}

const handleSubmit  = () => {

  let obj = {

    email:email,
    password:password,
  
}       
const newPostKey = push(child(ref(database), 'posts')).key;
const updates = {};
updates['/' + newPostKey] = obj
return update(ref(database), updates);
}

    return(
    <div className="App">
      <Topheader/>
      <Header/>
      <div className="my-account">
      <div className="registration">
      <h2>Registration</h2>
      <form> 
       <input type="email" id="reg-email" value={email} onChange = {(e) => handleInputChange(e)} name="email" placeholder="Email Address"/><br/><br/>
       <input type="password" id="password" value={password} onChange = {(e) => handleInputChange(e)} name="password" placeholder="Create Password"/><br/><br/>
       <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
      </form> 
      <a href="/user-login">already have an account?</a>
      </div>
      </div>
      
      <Footer/>
    </div>
    );
}

export default MyAccount;