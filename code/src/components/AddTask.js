/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import styled from 'styled-components';

import tasks from 'reducers/task';
import { Button } from 'styledcomponents/GlobalStyles';
import TodoCount from './TaskCounter';

const AddTask = () => {
  const [value, setvalue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()

    const newTask = {
      id: uniqid(),
      name: value,
      isDone: false
    }

    dispatch(tasks.actions.addItem(newTask))

    setvalue('')
  }

  return (

    <Form onSubmit={onFormSubmit}>
      {/* <TodoTitle
          type="text"
          placeholder="Highlight yo"
          value={value}
          onChange={(e) => setvalue(e.target.value)} /> */}
      <Description
        placeholder="What do you want to do today?"
        rows="5"
        cols="50"
        value={value}
        onChange={(event) => setvalue(event.target.value)} />
      <ToDoDetails>
        <TodoCount />
        <Button type="submit">Add</Button>

      </ToDoDetails>
    </Form>

  )
}

export default AddTask

/* const Wrapper = styled.div`
 background-color:#ffadad; */
/* height: 100%;
` */

const Form = styled.form`
/* background-color:#ffadad; */
display: flex;
flex-direction: column;
padding: 0;
margin-top: 40px;

/* button{
  display: inline;
  padding: 3px;
  margin: 5% 0 5% 70%;
  border: none;
  background-color: #9C0F48;
  color: #F9E4D4;
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  transition: transform 0.5s ease 0s;

  &:hover{
    transform: scale(1.2);
  } 

  @media (min-width: 668px) and (max-width: 1023px){
    padding: 10px;
    margin-top: 40px;
    font-size: 17px;

  button{
  padding: 5px 15px;
  margin: 30px 10px;
  }
}

  @media (min-width: 1024px){
  }
}*/
`

const Description = styled.textarea`
border: none;
resize: none;
font-family: 'Cormorant Garamond', serif;
width: 100%;
padding: 20px;
background-color: #F9E4D4;
`

const ToDoDetails = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 10px;
`