import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import moment from 'moment';
import todos from '../../reducers/store';
import { Container, TodoForm, TextInput, HeadingContainer, Heading, TodoInput, RadioBtnContainer, DueDate, RadioBtn, SubmittBtnContainer, SubmitBtn } from './NewTodo.style';

const NewTodo = () => {
  const [input, setInput] = useState('')
  const [dueDate, SetDueDate] = useState('')
  const dispatch = useDispatch();

  const today = moment().format('ddd D MMM');
  const tomorrow = moment().add(1, 'days').format('ddd D MMM');
  const twodays = moment().add(2, 'days').format('ddd D MMM')

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
        <RadioBtnContainer>
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
              value={twodays}
              name="date"
              onChange={(event) => SetDueDate(event.target.value)} />
            {twodays}
          </DueDate>
        </RadioBtnContainer>
        <SubmittBtnContainer>
          <SubmitBtn type="submit">New todo</SubmitBtn>
        </SubmittBtnContainer>
      </TodoForm>
    </Container>
  )
}

export default NewTodo