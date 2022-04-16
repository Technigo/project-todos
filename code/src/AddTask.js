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

    const isEditing = useSelector(state => state.tasks.isEditing);
    const editInput = useSelector(state => state.tasks.editObject.editText)
    const editSelect = useSelector(state => state.tasks.editObject.editCategory)
    const editDueDate = useSelector(state => state.tasks.editObject.editDate)

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
        dispatch(tasks.actions.addItem({id: uniqid(), text: inputTask, category: categorySelect ,complete: false, date: createDate, dueDate: new Date(dueDate).getTime()})) 
        navigate('/all');

     
    }

    // On Change function to update and edit item
    const onChangeItem = (text) => {

        if (!isEditing) {
            setInputTask(text)
        } else {
            //dispatch(tasks.actions.onChangeItemInput(item))
           // dispatch(tasks.actions.onChangeItemInput({editText: item, editCategory: categorySelect, editDate: dueDate}))
           dispatch(tasks.actions.onChangeItemInput(text))

        }
    }

    const onChangeCategorySelect = (category) => {
        if (!isEditing) {
            setCategorySelect(category)
        } else {
           dispatch(tasks.actions.onChangeCategory(category))
        }
    }

    const onChangeDueDate = (date) => {

        
            if (!isEditing) {
                setDueDate(date)
            } else  dispatch(tasks.actions.onChangeDate(date))
                 
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
                    value={isEditing ? editInput : inputTask}
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
                        value={isEditing ? editDueDate  : dueDate}
                        min = {createDate}
                        max = '01/01/2100'
                        onChange={(e) => onChangeDueDate(e.target.value)}
                        />
                </DueDateInput>
                <CategorySelector background = {OnSelectColorChange}> 
                    <select value={isEditing ? editSelect :categorySelect} 
                            onChange={(e) => onChangeCategorySelect(e.target.value)}>
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