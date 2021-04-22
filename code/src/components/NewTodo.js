import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

//import CustomDayPicker from './CustomDayPicker'
import { tasks } from '../reducers/tasks'

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
  align-items: center;
`

const TodoBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #8B98F9;
  border: none;
  font-size: 30px;
  line-height: 30px;
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
  width: 50px;
`

const NewTodo = () => {
  const dispatch = useDispatch()

  const [newTodoInput, setNewTodoInput] = useState('')
  

  const onInputChange = (event) => {
    setNewTodoInput(event.target.value)
  }

  const onButtonPress = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.postNewTodo(newTodoInput))
    setNewTodoInput('')
  }

  return (
    <Container>
      <Form>
        <TodoInput 
          type="text"
          placeholder="New task"
          value={newTodoInput}
          onChange={onInputChange}
        />
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