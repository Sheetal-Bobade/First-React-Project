import React, { useState } from "react";
import axios from "axios";

function AxiosPost(){
    const data={fname:"", lastName:""}
    const [inputdata,setInputdata]=useState(data)

    const handleData = (e)=>{
        setInputdata({...inputdata, [e.target.name]:e.target.value} )
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputdata)
        .then((response)=>{
            console.log(response)
        })
    }

    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1", inputdata)
        .then((response)=>{
            console.log(response)
        })
    }

    const handleDelete = (e)=>{
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            console.log(response)
        })
    }

    return(
       <div>Axios Post
       <form>
        <label>First Name :</label>
        <input type="text" name="fname" value={inputdata.fname} onChange={handleData}/><br/>
        <label>Last Name :</label>
        <input type="text" name="lastName" value={inputdata.lastName} onChange={handleData}/><br/>
        <button onClick={handleSubmit}>Submit</button> 
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
       </form>

       </div>
    )
}

export default AxiosPost