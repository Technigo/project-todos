import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { fetchData, tasks } from '../reducers/tasks'

import CustomDatePicker from './CustomDatePicker'

//Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
`
const Form = styled.form`
  box-sizing: border-box;
  width: 90%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
  align-items: flex-end;
  margin: 20px 0;
  padding: 10px;
`
const TodoBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: #ca8a8b;
  border: none;
  font-size: 45px;
  line-height: 45px;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
`
const TodoInput = styled.input`
  width: 90%;
  margin: 0;
  margin-bottom: 10px;
  padding: 5px;
  height: 38px;
  border: none;
  border-bottom: 1px solid #ca8a8b;
  border-radius: 4px;
  font-size: 20px;

  &::placeholder {
    color: #ca8a8b;
    padding-left: 5px;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

const BtnWrapper = styled.div`
  align-self: center;
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

  const onButtonClick = (event) => {
    event.preventDefault()
    if (dueDate !== '' && newTodoInput !== '') {
      dispatch(tasks.actions.postNewTodoAPI({ description: newTodoInput, dueDate: dueDate }))
      setNewTodoInput('')
      setDueDate('')
      setTimeout(dispatch(fetchData()), 4000)
    }
  }

  return (
    <Container>
      <Form>
      <BtnWrapper>
          <TodoBtn 
            type="button"
            onClick={onButtonClick}
          >
            +
          </TodoBtn>
        </BtnWrapper>
        <Wrapper>
          <TodoInput 
            type="text"
            placeholder="New task"
            minlenght="3"
            value={newTodoInput}
            onChange={onInputChange}
          />
          <CustomDatePicker
            onDateChange={onDateChange}
          />
        </Wrapper>
      </Form>
    </Container>
  )
}

export default NewTodo