import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import tasks from "reducers/tasks";
import { CheckBox, TaskStatus ,CompleteStatus, Reminder, TaskTitle, DateCreated } from "TaskStyling";
import {  IconButton } from "AddTaskStyle";
import trash from './img/trash.svg'
import edit from './img/edit.svg'

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

   

    // Toggle check complete button
    const onChangeCompleteBtn = (id) => {
        dispatch(tasks.actions.updateCompleteItem(id))
    }
 
  
    const currentDate = new Date().getTime();

    
    const dueDateFormat = new Date(task.dueDate).toLocaleDateString()
    
    console.log(currentDate, dueDateFormat, task.dueDate,'here')
    //Convert remainDay from millisecond to an integer
    // Plus 1 to make the date stay same, even when the millisecond decrease
    const remainDay = Math.floor((task.dueDate - currentDate)/(1000*60*60*24)+1)

    const reminder = () => {

        if (task.dueDate) {

            if (remainDay > 10 ) {
                return <span>Due: {dueDateFormat}</span> 
            } else {

                return <span>Due in {remainDay} {remainDay === 1 ? 'day' : 'days'}</span>;
            }
        } 
         return <span> No due Date </span>
    }      
    return (
        <CheckBox>
            <input 
            type='checkbox'
            value={task.text}
            checked={task.complete}
            onChange={() => onChangeCompleteBtn(task.id)}
            />
            <label htmlFor={task.text}>
            
                <TaskStatus>
                    <div>

                        {/*<CompleteStatus background = {task.complete ? 'green' : '#f3e0f0'}> {task.complete ? 'complete' : 'uncomplete'} </CompleteStatus>*/}
                                            
                        <Reminder>{reminder()}</Reminder>
                         <Reminder>{task.category}</Reminder>
                    </div>
                </TaskStatus>


                <TaskTitle> {task.text}  </TaskTitle>
                

                <div className="flex">
                        {/*<DateCreated>Created: {task.date}</DateCreated>*/}
                        <div>
                            <IconButton type="button" onClick={() => editItem(task.id)}>
                                <img tabIndex='1' src={edit} alt='edit icon' />
                            </IconButton>
                            <IconButton type="button" onClick={() => deleteItem(task.id)}>
                                <img tabIndex='1' src={trash} alt='trash icon' />
                            </IconButton>
                        </div>
                    </div>

            </label>
        </CheckBox>
    )

}

export default Task