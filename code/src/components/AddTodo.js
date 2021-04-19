import React, { useState } from 'react'

// import { useDispatch } from 'react-redux'
// import saveTodo from '../reducers/todoSlice'

// import './Input.css'


export const AddTodo = () => {


    return (
        <div className="input">
            {/* <input
                required
                type="text"
                // onChange={event => setInput(event.target.value)}
                // value={input}
                placeholder="Add New Task"
            />    */}
         
            <input 
            required
            type="text"
            placeholder="Add New Task"  />

            {/* <input type="submit" value="Submit" /> */}
            
            {/* <button onClick={}>Add!</button> */}
            <button>Add!</button>
        </div>
    )
}
  