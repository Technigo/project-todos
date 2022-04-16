import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
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
const Input=styled.input`
  width: 60%;
  padding: 2px 6px;
  margin: 8px 0;
  box-sizing: border-box;
  border:none;
  border-bottom: 2px solid black;
  background:none;

 &:focus{
    outline:none;
    width: 60%;
    padding: 2px 6px;
    margin: 8px 0;
    box-sizing: border-box;
    border:none;
    border-bottom: 2px solid black;
    background:none;
}
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
        Add task ☛ &nbsp;
        <Input 
          type="text"
          required
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}/>
      </label>
      <SubmitButton type="submit">&nbsp;<span role="img" aria-label="delete"> ➕</span></SubmitButton>
    </form>
  )
}