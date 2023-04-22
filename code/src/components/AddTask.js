import React, { useState } from 'react';
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'

export const AddTask = () => {
  // useState to control form elements
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const onTaskSubmit = (event) => {
    // prevent default reload
    event.preventDefault();
    const newTask = {
      // use Date.now to create somewhat unique id:
      id: Date.now().toString(),
      text: inputValue,
      complete: false
    }
    dispatch(tasks.actions.addTask(newTask))
    // clear input field after submit
    setInputValue('')
  }

  return (
    <Wrapper>
      <Form onSubmit={onTaskSubmit}>
        <Label htmlFor="addInput">
          Add a new task.
          <Input value={inputValue} id="addInput" type="text" onChange={(event) => setInputValue(event.target.value)} />
        </Label>
        <ButtonWrapper>
          <Button type="submit">Add</Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  width: 320px;
  border-radius: 10px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 2.25rem;
  width: 290px;
  margin: 0.5rem auto 0 auto;
`

const Input = styled.input`
width: 100%;
border-radius: 10px;
padding: 10px;
font-family: 'Amatic SC', cursive;
font-weight: 700;
font-size: 16px;
border: none;
`

const ButtonWrapper = styled.div`
display: flex; 
align-items: flex-end;
justify-content: flex-end;
`

const Button = styled.button`
width: 45px;
height: 29px;
font-family: 'Amatic SC', cursive;
font-weight: 700;
font-size: 1.3rem;
display: flex;
justify-content: center;
align-items: center;
background: #fee4ed;
border: none;
margin: 1rem 1rem 1rem 0.5rem;
cursor: pointer;
&:hover {
  text-decoration: underline;
}
`