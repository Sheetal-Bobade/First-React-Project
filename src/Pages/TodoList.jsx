import React, { useState } from "react";
import '../custom.css';
import '../App.css';

function TodoList(){
    const [activity,setActivity]=  useState("");
    const [listdata, setListdata]= useState([]);
    function AddActivity(){
       //setListdata([...listdata, activity])
       //console.log(listdata);
       setListdata((listdata)=>{
        const updatedList=[...listdata, activity]
        console.log(updatedList)
        setActivity('')
        return updatedList
       }
       )
    }

    function removeActivity(i){
        const updatedListData=listdata.filter((element,id)=>{
           return i!==id;
    
        })
         setListdata(updatedListData);
    }

    function removeAll(){
     setListdata ([])
    }

 return(

    <div className="Container">
    <div className="todo-heading">Todo List</div>
    <div className="activity-field">
    <input type="text" placeholder="Add Activity" value={activity} onChange={(e)=> setActivity(e.target.value)}/>
    <button className="add-btn" onClick={AddActivity}>Add</button>
    </div>
    
    {listdata.length>=1 && <p className="todo-list-heading">Here is your list</p>}
    {listdata !=[] && listdata.map((data, i)=>{
        return(
            <p key={i}>
               <div className="activity-field">
               <div className="activity">{data}</div> 
               <div className="activity-btn"><button className="remove-btn" onClick={()=>removeActivity(i)}>Remove</button></div>
               </div>
            </p>
        )
    })}

    {listdata.length>=1 &&  <div className="activity-field"><button className="remove-all-btn" onClick={removeAll}>Remove All</button></div>}
   
    </div>
    
 )
}

export default TodoList;