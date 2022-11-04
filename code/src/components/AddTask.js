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
      <Description
        placeholder="What do you want to do today?"
        rows="5"
        cols="50"
        value={value}
        onChange={(event) => setvalue(event.target.value)} />
      <ToDoDetails>
        <TodoCount />
        <Button type="submit">
          <img
            src="/assets/add.png"
            alt="delete task" />
        </Button>
      </ToDoDetails>
    </Form>
  )
}

export default AddTask

const Form = styled.form`
display: flex;
flex-direction: column;
padding: 0;
margin-top: 20%;
align-items: center;

@media (min-width: 901px){

}
`

const Description = styled.textarea`
border: none;
resize: none;
font-family: 'Cormorant Garamond', serif;
width: 90%;
padding: 20px;
background-color: var(--quinary);
font-size: 18px;
box-shadow: 2px 16px 21px -13px rgba(145,138,138,0.51);

::placeholder{
  font-size: 12px;
}

@media (min-width: 600px) and (max-width: 900px){
  padding: 20px 20px 50px;
  font-size: 20px;
  ::placeholder{
  font-size: 16px;
}
}

@media (min-width: 901px){
  padding: 20px 20px 80px;
  width: 85%;
  font-size:28px;

  ::placeholder{
  font-size: 25px;
}
  }
`

export const ToDoDetails = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 80%;
margin: 10px auto;
justify-content: space-between;


@media (min-width: 600px) and (max-width: 900px){
  margin: 20px auto;
}

@media (min-width: 901px){
  margin: 30px auto;
}
`