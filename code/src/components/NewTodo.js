import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import moment from 'moment';
import styled from 'styled-components';
import todos from '../reducers/store';

const Container = styled.div`
grid-column: 1 / 2; 
grid-row: 1 / 2; 
/* border: dashed 3px black;  */
padding: 2em; 

`

const TodoForm = styled.form`
display: grid; 
grid-template-columns:  1fr 1fr ; 
justify-content: space-evenly;  `

const TodoInput = styled.input`
width: 150px; 
height: 80px;
display: inline-block;
justify-content: center;
grid-column: 1 / 1;
grid-row: 2 / 4;
      `

const RadioBtnConatiner = styled.div`
display: flex;
flex-direction: column; 
margin-left: 15px; 
/* margin-top: px; */
padding-left: 6em;  
  `

const RadioBtn = styled.input`
margin-right: 10px; 
`

const DueDate = styled.label`
margin-top: 10px; 
    `

const SubmitBtn = styled.button`
margin-right: 20px;
text-align: center;  
  `

const TextInput = styled.div`
padding-left: 4em; `

const SubmittBtnConatiner = styled.div`
padding-left: 4em; 
margin-top:10px; `

const HeadingContainer = styled.div`
display: flex; 
flex-direction: row; 
 `

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
            <h1>NEW TODO</h1>
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
            <h1>DUE DATE</h1>
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
          <SubmitBtn type="submit">Send</SubmitBtn>
        </SubmittBtnConatiner>
      </TodoForm>
    </Container>
  )
}

export default NewTodo