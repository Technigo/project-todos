import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'

import './addtaskform.css'

export const AddTaskForm = () => {
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    // console.log(name) name : här lagras mitt input i text-field

    const handleSubmit = (event) => { //this function will be envoked when the form submits. It will save the input from name
    event.preventDefault()
    dispatch(tasks.actions.addItem(name)) //inside addItem() is the payload. It is the paylowad I want to reach
setName('')    
}

    return(
     <form onSubmit={handleSubmit}>
       <label>
           <input 
           className="input-task"
           type="text" 
           placeholder="Add task.." 
           required
           value={name} 
           onChange={(event) => setName(event.target.value)}>
           </input>
        </label>    
        <button className="add-task" type="submit">+</button>
    
     </form>
        
    )
}