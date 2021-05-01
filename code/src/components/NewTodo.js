import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { BsFillPlusCircleFill } from 'react-icons/bs'

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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
  align-items: flex-end;
  margin: 20px 0;
  padding: 10px;
`
const TodoBtn = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: none;
  font-size: 50px;
  border-radius: 50px;
  cursor: pointer;
  align-self: center;
  background-color: #ffffff;
  margin-right: 10px; 
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
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
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
          <TodoBtn 
            type="button"
            onClick={onButtonClick}
          >
            <BsFillPlusCircleFill
              color="#ca8a8b"
            />
          </TodoBtn>
      </Form>
    </Container>
  )
}

export default NewTodo