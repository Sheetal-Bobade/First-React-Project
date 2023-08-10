import {useEffect, useState} from "react";
import '../App.css';
import Topheader from '../Component/Topheader';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import '../custom.css';

function Register(){
 
    const [user, setUser]= useState({
       email:"", password:""
    });
    const [arr, setArr] = useState([]);

    let name, value;
    const handleInputs = (e) =>{
      e.preventDefault();
      console.log(user);
      name= e.target.name;
      value= e.target.value;

      setUser({...user, [name]:value});
      
    }

    const handleSubmit = (e) =>{
     e.preventDefault();
    setArr((arr)=>[...arr, user]);
    console.log(arr, user); 
    }

    useEffect(()=> {
      localStorage.setItem("user",JSON.stringify(arr));
    }, [arr])
  
    return(
    <div className="App">
      <Topheader/>
      <Header/>
      <div className="my-account">
      <div className="registration">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}> 
       <input type="email" id="email" name="email" value={user.email} onChange={handleInputs} placeholder="Email Address"/><br/><br/>
       <input type="password" id="password" name="password" value={user.password}  onChange={handleInputs} placeholder="Create Password"/><br/><br/>
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