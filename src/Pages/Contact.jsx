import {useEffect, useState, useContext, useRef, useReducer, useMemo} from "react";
import '../App.css';
import Topheader from '../Component/Topheader';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import '../custom.css';
import { Name } from "./Context";
import useCustomHook from "../Component/useCustomHook";
import ChildA from "./ChildA";

const initialstate=0;
const reducer = (state, action)=>{
  switch(action){
    case "Increment":
      return state +1
    case "Decrement":
      return state -1
    default:
      return state 
  }
}

function Contact(props){

    
  const [add1, setAdd1] = useState(0);
  const [count1, setCount1] = useState(0);
 // const Learning = useCallback( () =>{

 // })


  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100)

  const multiplication= useMemo(function multiply(){
    return add*20;
  },[add])

  const division= useMemo(function devide(){
    return minus/5;
  },[minus])

  const [count,dispatch]  =useReducer(reducer,initialstate)

  const clickedButton = useCustomHook(0 , "SecondComponent");


  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  function Reset(){
    setInputValue("")
  }


  




    const [user, setUser]= useState({
      name:""
     });
     const [arr, setArr] = useState([]);
     const val = useContext(Name);
 
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
      <h1>My Name is {val}</h1><br/><br/>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={Reset}>Reset</button>
      
      
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>

      <div>
			<h1> This is the First Component</h1>
     
			<button onClick={clickedButton}>
				Click here!
			</button><br/><br/>
      <div>Count : {count}</div>
      <button onClick={()=>dispatch("Increment")}>Increment</button>
      <button onClick={()=>dispatch("Decrement")}>Decrement</button><br/><br/>

      <p>Multiplication Value : {multiplication}</p>
      <p>Division Value : {division}</p>
      <button onClick={()=>setAdd(add +1)}>Addition</button>
      <span>{add}</span><br/>
      <button onClick={()=>setMinus(minus -1)}>Substraction</button>
      <span>{minus}</span><br/><br/>
      <h3>Usecallback Hook</h3><br/>
      
      <span>{add1}</span>

      <button onClick={()=> setAdd1(add1+1)}>Addition</button>
      
      <span>{count1}</span>
      <button onClick={()=> setCount1(count1+2)}>Count</button>


		</div>
      </div>
      
      <Footer/>
    </div>
    );
}

export default Contact;