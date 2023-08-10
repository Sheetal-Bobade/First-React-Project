import {useEffect, useState} from "react";
import './App.css';
import Topheader from './Component/Topheader';
import Header from './Component/Header';
import Footer from './Component/Footer';
import './custom.css';

function Contact(){
    const [user, setUser]= useState({
      name:""
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
      <div className="contact-us">
      <div className="contact">
      <h2>Contact us</h2>
      <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleInputs}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            
      </div>
      
      </div>
      
      <Footer/>
    </div>
    );
}

export default Contact;