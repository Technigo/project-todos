import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid';
import {    IconButton, AddTaskForm, InputNewTask, 
            DateCreated, DueDateInput, CategorySelector, 
            NoteTextArea, InputTaskContainer, SubmitTaskBtn } from "AddTaskStyle";


import tasks from "reducers/tasks";
import { useNavigate } from "react-router-dom";
import leftBtn from './img/leftBtn.svg'
import folder from './img/folder.svg'
import calendar from './img/calendar.svg'
import alarm from './img/alarm.svg'


const AddTask = () => {
    
    const [inputTask, setInputTask] = useState('')
    const [dueDate, setDueDate] = useState('');
    const [categorySelect, setCategorySelect] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const createDate = new Date().toLocaleDateString();

    const editItem = useSelector(state => state.tasks.editItem);
    const isEditing = useSelector(state => state.tasks.isEditing);


    // Option values for category selector
    const categoryOption = [ 'Category', '🏠 Home', '👩‍💻 Work', '👩🏼‍🤝‍👩🏻 Meeting', '❤️ Personal']

    // Function to disable the label of select option 

    const SelectOptionDisplay = (option) => {
        if (option === 'Category') {
            return <option disabled key={option} value=''>{option}</option>
        }

        return <option key={option} value={option}>{option}</option>
    }

    //Change category color
    const OnSelectColorChange = () => {
        if (categorySelect === '🏠 Home') {
            return '#c7e5c8'
        } else if (categorySelect === '👩‍💻 Work') {
            return '#ffebee'
        } else if (categorySelect === '👩🏼‍🤝‍👩🏻 Meeting') {
            return '#fff3e0'
        } else if (categorySelect === '❤️ Personal') {
            return '#ede7f6'
        } else return '#c6d9fa'
    }

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
        <div className="add-task">
            <IconButton type="button" onClick={onBackBtnClick}>
                <img tabIndex='1' src={leftBtn} alt='left arrow icon' />
             </IconButton>
            <AddTaskForm onSubmit={(e) => onSubmitNewTask(e)}>
                <InputTaskContainer>
                    <InputNewTask 
                    type='text' 
                    placeholder="Task title"
                    value={isEditing ? editItem : inputTask}
                    onChange={(e) => onChangeItem(e.target.value)}
                    required              
                    />
                    <button type="button">
                        <img src={folder} alt="folder icon" />
                    </button>
                </InputTaskContainer>

                <DateCreated>
                    <img src={calendar} alt='calendar icon'/> 
                        <p>
                            Date created: 
                            <span> {createDate}</span>
                        </p>
                </DateCreated>

                <DueDateInput htmlFor='due-date'>
                        <img src={alarm} alt='alarm clock icon' />
                        Due by: 
                        <input 
                        type='date' 
                        id="due-date"
                        value={dueDate}
                        min = {createDate}
                        max = '01/01/2100'
                        onChange={(e) => setDueDate(e.target.value)}
                        />
                </DueDateInput>
                <CategorySelector background = {OnSelectColorChange}> 
                    <select value={categorySelect} onChange={(e) => setCategorySelect(e.target.value)}>
                        {categoryOption.map(item =>  SelectOptionDisplay(item))}
                    </select>
                </CategorySelector>
                <NoteTextArea 
                    placeholder='+ Add note'
                    rows='10'
                    >
                </NoteTextArea>
                <SubmitTaskBtn type="submit">Submit</SubmitTaskBtn>
            </AddTaskForm>
        </div>
    )
}

export default AddTask;