import React, { useEffect, useState } from "react";
import axios from 'axios'

function Axios(){
    const [userdata, setUserdata]= useState([]);
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/users/")
        .then((response)=>{
            console.log(response)
            setUserdata(response.data)
        })
    }, [])

    return(
        <div>Axios
            {userdata.map((data)=>{
                return(
                    <div>{data.name}</div>
                )
            })}
        </div>
    )
}

export default Axios