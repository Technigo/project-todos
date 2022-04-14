import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks';
import styled from 'styled-components'
import uniqid from 'uniqid'

const SubmitButton=styled.button`
    background: none;
	color: black;
    
 
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

`
export const AddTask=()=>{
    const dispatch=useDispatch();
    const[inputValue, setInputValue]=useState("");
    
    const onFormSubmit=(event)=>{
    event.preventDefault();
    const newTask={
        id:uniqid(),
        name: inputValue,
        isDone: false,
    }
    dispatch(tasks.actions.addTask(newTask));
    setInputValue("")
    }
return(
    <form onSubmit={onFormSubmit}>
      <label>
        New Task: &nbsp;
        <input 
          type="text"
          required
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}/>
      </label>
      <SubmitButton type="submit">Submit</SubmitButton>
    </form>

    )

}