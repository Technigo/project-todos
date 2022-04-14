import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid';


import tasks from "reducers/tasks";
import { useNavigate } from "react-router-dom";
import leftBtn from './img/leftBtn.svg'
import folder from './img/folder.svg'


const AddTask = () => {
    
    const createDate = new Date().toLocaleDateString();
    const [inputTask, setInputTask] = useState('')
    const [dueDate, setDueDate] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const editItem = useSelector(state => state.tasks.editItem);
    const isEditing = useSelector(state => state.tasks.isEditing);

    
    // Submit Task function
    const onSubmitNewTask = (e) => {
      
        e.preventDefault(e)
        dispatch(tasks.actions.addItem({id: uniqid(), text: inputTask, complete: false, date: createDate, dueDate: new Date(dueDate).getTime()})) 
        navigate('/all');
     
    }

    // On Change function to update and edit item
    const onChangeItem = (item) => {

        if (!isEditing) {
            setInputTask(item)
        } else {
            setInputTask(editItem)
            dispatch(tasks.actions.onChangeItemInput(item))

        }
    }

    //Go back to home page
    const onBackBtnClick = () => {
        navigate('/');
    }

    return (
        <div>
            <button type="button" onClick={onBackBtnClick}>
                <img src={leftBtn} alt='left arrow icon' />
             </button>
            <form onSubmit={(e) => onSubmitNewTask(e)}>
                <input 
                type='text' 
                placeholder="Task title"
                value={isEditing ? editItem : inputTask}
                onChange={(e) => onChangeItem(e.target.value)}
                required
                />
                <label htmlFor='due-date'>Set due date
                    <input 
                    type='date' 
                    id="due-date"
                    value={dueDate}
                    min = {createDate}
                    max = '01/01/2100'
                    onChange={(e) => setDueDate(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <button type="button">
                <img src={folder} alt="folder icon" />
            </button>
        </div>
    )
}

export default AddTask;