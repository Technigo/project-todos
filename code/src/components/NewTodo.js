import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import moment from 'moment';
import styled from 'styled-components';
import todos from '../reducers/store';

const Container = styled.div`
/* grid-column: 1 / 2; 
grid-row: 1 / 2;  */
padding: 2em; 

`

const TodoForm = styled.form`
display: grid; 
grid-template-columns:  1fr 1fr ; 
gap: 1em; 

@media (max-width: 678px){
  display:flex;
  flex-direction: column; 
  
}
 `

const TodoInput = styled.input`
width: 80%; 
height: 50%;
display: inline-block;
justify-content: center;
margin-top:0.5em; 
margin-left:1.5em; 
grid-column: 1 / 1; 
border-radius: 15px; 
font-family: 'Reenie Beanie';
font-weight:bold; 
font-size:2em; `

const RadioBtnConatiner = styled.div`
display: block;
text-align: center; 
@media (max-width: 678px){
  display:flex;
  flex-direction: column; 
  
}

  `

const RadioBtn = styled.input`
margin-top: 1.5em; 
margin-right: 10px;
margin-left: 10px;  
`

const DueDate = styled.label`
margin-top: 10px; 
font-family: 'Reenie Beanie';
font-weight:bold; 
font-size:2em; 
    `

const SubmitBtn = styled.button`
margin-right: 20px;
text-align: center; 
display: inline-block;
border-radius: 15px;  
padding: 0.5rem 0; 
margin: 0.5rem 1rem;
width: 11rem;
background-color: #070f4e;
border: 2px solid white;
font-weight: bold; 
color: #f5ebeb; 
@media (max-width: 678px){
  text-align: center;  
  
}

  `

const TextInput = styled.div`
 `

const SubmittBtnConatiner = styled.div`
padding-left: 1.5em; 
margin-top:15px;  `

const HeadingContainer = styled.div`
display: flex; 
flex-direction: row;
justify-content: center; 
margin-bottom: 10px;   
 `
const Heading = styled.h1`
padding: 10px; 
color: #f5ebeb; 
background-color: #070f4e;`

const NewTodo = () => {
  const [input, setInput] = useState('')
  const [dueDate, SetDueDate] = useState('')
  const dispatch = useDispatch();

  const today = moment().format('ddd D MMM');
  const tomorrow = moment().add(1, 'days').format('ddd D MMM');
  const yesterday = moment().add(-1, 'days').format('ddd D MMM')

  console.log(today, tomorrow)
  const onNewTodo = (event) => {
    event.preventDefault(event);

    const Todo = {
      id: uniqid(),
      name: input,
      date: dueDate,
      completed: false,
      postedTime: moment().format('ddd D MMM')

    }

    dispatch(todos.actions.addTodo(Todo))

    setInput('')
  }

  return (
    <Container>
      <TodoForm onSubmit={onNewTodo}>
        <TextInput>
          <HeadingContainer>
            <Heading>NEW TODO</Heading>
          </HeadingContainer>
          <TodoInput
            type="text"
            value={input}
            placeholder="let´s be productive"
            onChange={(event) => setInput(event.target.value)}
            required />
        </TextInput>
        <RadioBtnConatiner>
          <HeadingContainer>
            <Heading>DUE DATE</Heading>
          </HeadingContainer>
          <DueDate>
            <RadioBtn
              type="radio"
              value={today}
              name="date"
              onChange={(event) => SetDueDate(event.target.value)} />
            {today}
          </DueDate>
          <DueDate>
            <RadioBtn
              type="radio"
              value={tomorrow}
              name="date"
              onChange={(event) => SetDueDate(event.target.value)} />
            {tomorrow}
          </DueDate>
          <DueDate>
            <RadioBtn
              type="radio"
              value={yesterday}
              name="date"
              onChange={(event) => SetDueDate(event.target.value)} />
            {yesterday}
          </DueDate>
        </RadioBtnConatiner>
        <SubmittBtnConatiner>
          <SubmitBtn type="submit">New todo</SubmitBtn>
        </SubmittBtnConatiner>
      </TodoForm>
    </Container>
  )
}

export default NewTodo