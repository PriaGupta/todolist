import React, { useState } from 'react'
import "./Todo.css"
const Todo = () => {

    const [input,setFirst]=useState('')
    const [todo,setSecond]=useState([])

    const add=(e)=>{
       setFirst(e.target.value);
    }

    const item=()=>{
    setSecond((oldinfo)=>{
    return[...oldinfo,input];
    })
    setFirst("");
    }

    const deleteitem=(taskIndex)=>{
        const updatedTasks = todo.filter((_,index) => index !== taskIndex);
        setSecond(updatedTasks);
    };
      
  return (
    <>
        <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
            
                <div className='box1'>
                <div className='head'>
                <h3>To Do List</h3>
                </div>
                <div className='box1-inner'>
            <input type="text" placeholder='enter your todo' value={input} onChange={add}></input>

            <button onClick={item}>Add</button> 
            </div>          
            <ol className="todo-list">
              {
              todo.map((itemvalue,index)=>{
               
                return(
                  <li key={index} id={index}>{itemvalue}
                  <button className="remove-button" onClick={()=>{deleteitem(index)}}>Remove</button></li>
              )
              })
            }   
            </ol>
            </div>
            </div>
            </div>
        </div>
      {/* </div> */}

      
    </>
  )
}

export default Todo
