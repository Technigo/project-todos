import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import tasks from "reducers/tasks";


const Task = ( {task} ) => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [complete, setComplete] = useState(false);
    
    const editItem = (id) => {
        navigate('/add-task');
        dispatch(tasks.actions.editItem(id));
    }

    const deleteItem = (id) => {
        dispatch(tasks.actions.deleteItem(id))
    }
   

    // Toggle check complete button
    const onChangeCompleteBtn = (id) => {
        setComplete(!complete);
        dispatch(tasks.actions.updateCompleteItem(id))
    }
 
  
    const currentDate = new Date().getTime();

    const dueDateFormat = new Date(task.dueDate).toLocaleDateString()

    //Convert remainDay from millisecond to an integer
    // Plus 1 to make the date stay same, even when the millisecond decrease
    const remainDay = Math.floor((task.dueDate - currentDate)/(1000*60*60*24)+1)

    const reminder = () => {
        if (remainDay > 10) {
            return dueDateFormat 
        } 

        return remainDay + 'days';
    }      
    return (
        <>
        <label htmlFor={task.text}>
        <span> {task.complete ? 'complete' : 'uncomplete'} </span>
    
        <p> {task.text}  </p>
    
        <span>Due date: {reminder()}</span>
        <span>Created: {task.date}</span>

                            
        <button type="button" onClick={() => editItem(task.id)}>edit</button>
        <button type="button" onClick={() => deleteItem(task.id)}>delete</button>
        </label>
        <input 
        type='checkbox'
        value={task.text}
        checked={complete}
        onChange={() => onChangeCompleteBtn(task.id)}
        />
        </>
    )

}

export default Task