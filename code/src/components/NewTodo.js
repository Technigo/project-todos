import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { tasks } from '../reducers/tasks'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
`
const Form = styled.form`
  display: flex;
`

const TodoBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #8B98F9;
  border: none;
  font-size: 30px;
  color: #fff;
`
const TodoInput = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 5px;
  width: 80%;
  height: 38px;
  border: none;
  border-bottom: 2px solid #8B98F9;
  margin-left: 10px;
  font-size: 20px;
`

const DatePickerContainer = styled.div`
  margin-left: auto;
`

const NewTodo = () => {
  const dispatch = useDispatch()

  const [newTodoInput, setNewTodoInput] = useState('')
  const [dueDate, setDueDate] = useState(new Date())

  const onInputChange = (event) => {
    setNewTodoInput(event.target.value)
  }

  const onButtonPress = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.postNewTodo(newTodoInput))
    setNewTodoInput('')
  }

  console.log(dueDate)

  return (
    <Container>
      <Form>
        <TodoBtn 
          type="button"
          onClick={onButtonPress}
          >
            +
        </TodoBtn>
        <TodoInput 
          type="text"
          placeholder="New task"
          value={newTodoInput}
          onChange={onInputChange}
        />
        <DatePickerContainer>
          <DatePicker
            selected={dueDate}
            onChange={date => setDueDate(date)}
            dateFormat='yyyy/MM/dd'
            isClearable
          />
        </DatePickerContainer>
      </Form>
    </Container>
  )
}

export default NewTodo