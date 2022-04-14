import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import tasks from "reducers/tasks";
import { formatDistance } from 'date-fns';


const Task = ( {task} ) => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    const editItem = (id) => {
        navigate('/add-task');
        dispatch(tasks.actions.editItem(id));
    }

    const deleteItem = (id) => {
        dispatch(tasks.actions.deleteItem(id))
    }
   
 

    const currentDate = new Date().getDate();
    const dueDate = new Date(task.dueDate).getDate()
    const currentMonth = new Date().getMonth();
    const currentYear =  new Date().getFullYear();
    const dueMonth = new Date(task.dueDate).getMonth();
    const dueYear = new Date(task.dueDate).getFullYear();

    const dateDifference =  Number(dueDate - currentDate);

    const reminder = () =>{
        if (currentMonth === dueMonth && currentYear === dueYear && dateDifference < 10) 
        {   console.log(dateDifference)
            return <span>Due in {dateDifference}</span>
        }
    }


      
    return <li key={task.id}>
    {reminder()}
    <span> {task.complete ? 'complete' : 'uncomplete'} </span>
    <p> {task.text}  </p>
    <span>Due date: {task.dueDate === '' ? 'no due date' : task.dueDate}</span>
    <span className='thought-date'>	
    {formatDistance(task.date, Date.now(), {
								addSuffix: true,
							})}</span>
                            
    <button type="button" onClick={() => editItem(task.id)}>edit</button>
    <button type="button" onClick={() => deleteItem(task.id)}>delete</button>
    </li>

}

export default Task