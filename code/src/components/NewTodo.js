import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { fetchData, tasks } from '../reducers/tasks'

import CustomDatePicker from './CustomDatePicker'

//Styled components
const Container = styled.div`
  display: flex;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`
const TodoBtn = styled.button`
  width: 55px;
  height: 50px;
  border-radius: 8px;
  background-color: #8B98F9;
  border: none;
  font-size: 45px;
  line-height: 45px;
  color: #fff;
  align-self: center;
  margin-right: 10px;
  border-radius: 50%;
  cursor: pointer;
`
const TodoInput = styled.input`
  box-sizing: border-box;
  margin: 0;
  margin-bottom: 10px;
  padding: 5px;
  width: 95%;
  height: 38px;
  border: none;
  border-bottom: 1px solid #8B98F9;
  border-radius: 4px;
  background-color: #fcfcfc;
  font-size: 20px;

  &::placeholder {
    color: #8B98F9;
    padding-left: 5px;
  }
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const NewTodo = () => {
  const [dueDate, setDueDate] = useState('')
  const [newTodoInput, setNewTodoInput] = useState('')
  
  const dispatch = useDispatch()

  const onInputChange = (event) => {
    setNewTodoInput(event.target.value)
  }

  const onDateChange = (date) => {
    setDueDate(date[0].toJSON())
  }

  const onButtonPress = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.postNewTodoAPI({ description: newTodoInput, dueDate: dueDate }))
    setNewTodoInput('')
    dispatch(fetchData())
  }

  return (
    <Container>
      <Form>
        <Wrapper>
          <TodoInput 
            type="text"
            placeholder="New task"
            value={newTodoInput}
            onChange={onInputChange}
          />
          <CustomDatePicker
            onDateChange={onDateChange}
          />
        </Wrapper>
        <TodoBtn 
          type="button"
          onClick={onButtonPress}
        >
          +
        </TodoBtn>
      </Form>
    </Container>
  )
}

export default NewTodo