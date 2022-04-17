import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import tasks from "reducers/tasks";
import { CheckBox, TaskStatus ,
            CompleteStatus, DateCreated,
            TaskTitle, Buttons,
            TaskInfo } from "TaskStyling";
import {  IconButton } from "AddTaskStyle";
import trash from './img/trash.svg'
import edit from './img/edit.svg'
import { el } from "date-fns/locale";

const Task = ( {task} ) => {
    
    const navigate = useNavigate();
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
        console.log(task.complete)
    }
 
  
    const currentDate = new Date().getTime();

    
    const dueDateFormat = new Date(task.dueDate).toLocaleDateString()
    
    //Convert remainDay from millisecond to an integer
    // Plus 1 to make the date stay same, even when the millisecond decrease
    const remainDay = Math.floor((task.dueDate - currentDate)/(1000*60*60*24)+1)

  
    const reminder = () => {
        if (task.dueDate) {

            if (remainDay > 10 ) {
                return <span>Due: {dueDateFormat}</span> 
            } else if (remainDay < 10) {

                return <span>Due in {remainDay} {remainDay === 1 ? 'day' : 'days'}</span>;
            } else if (remainDay === 0) {
                return <span> Due today </span>
            } else if (remainDay < 0) {
                return <span>Overdue</span>
            }
        } 
            return <span> No due date </span>
        
    }   

    const categoryDisplay = () => {
        if(task.category) {

            if (task.category === '🏠 Home') {
                return <span role='img' aria-label='home'>🏠 -  </span>
            } else if (task.category === '👩‍💻 Work') {
                return <span role='img' aria-label='work'>👩‍💻 - </span>
            } else if (task.category === '👩🏼‍🤝‍👩🏻 Meeting') {
                return <span role='img' aria-label='meeting'>👩🏼‍🤝‍👩🏻 - </span>
            } else if (task.category === '❤️ Personal') {
                return <span role='img' aria-label='personal'>❤️ - </span>
            } 
        } 

        return <span></span>
        }
    
    

    return (
        <CheckBox background={task.complete ? '#c6d9fa' : '#F3E0F0'}>
            <input 
            type='checkbox'
            value={task.text}
            checked={task.complete}
            onChange={() => onChangeCompleteBtn(task.id)}
            />
            <label htmlFor={task.text}>
                <TaskStatus>
                   <CompleteStatus> {task.complete ? 'complete' : 'uncomplete'} </CompleteStatus>
                    <Buttons>
                        <IconButton type="button" onClick={() => editItem(task.id)}>
                                        <img tabIndex='1' src={edit} alt='edit icon' />
                        </IconButton>
                        <IconButton type="button" onClick={() => deleteItem(task.id)}>
                                        <img tabIndex='1' src={trash} alt='trash icon' />
                        </IconButton>
                    </Buttons>

                </TaskStatus>
                <TaskInfo>

                        <TaskTitle> {categoryDisplay()} {task.text}  </TaskTitle>
                        <DateCreated>Created at: {task.date}</DateCreated>
                        <DateCreated>{reminder()}</DateCreated>
                </TaskInfo>
                
            </label>
        </CheckBox>
    )

}

export default Task