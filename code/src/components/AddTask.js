import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components'


export const AddTaskForm = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()


  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addTask(todo))
    setTodo('')
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label>
        <Input type="text" placeholder="New Todo" value={todo} onChange={(event) => setTodo(event.target.value)} />
      </label>
      <Button type="submit">Add task</Button>
    </FormWrapper>
  )


}


const FormWrapper = styled.form`
display: flex;
justify-content: space-around; 
`

const Input = styled.input`
flex-direction: row;
align-items: baseline;
padding-right: 10;
padding-bottom: 15;
margin-top: 30px; 
background: transparent;
font-size: 25px;
width: 100%; 
border-style: none;

`
const Button = styled.button`
background-color: black;
color: white;
font-size: 20px; 
align-item: right; 
margin-top: 20px; 
border-radius: 50px;
width: 100px;
height: 35px; 
`




