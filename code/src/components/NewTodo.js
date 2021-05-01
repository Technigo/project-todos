import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { fetchData, tasks } from '../reducers/tasks'

import CustomDatePicker from './CustomDatePicker'

//Styled components
const Container = styled.div`
  display: flex;
  //padding: 10px;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`
const TodoBtn = styled.button`
  -webkit-appearance: none;
  -webkit-border-radius: none;
  //-webkit-border: none;
  width: 50px;
  height: 50px;
  background-color: #ca8a8b;
  border: none;
  font-size: 45px;
  line-height: 45px;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 2px 1px 15px rgb(148 124 124 / 68%);
`
const TodoInput = styled.input`
  box-sizing: border-box;
  margin: 0;
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  height: 38px;
  border: none;
  border-bottom: 1px solid #ca8a8b;
  border-radius: 4px;
  background-color: #fcfcfc;
  font-size: 20px;
  box-shadow: 1px 1px 20px 0px rgb(177 153 153 / 68%);

  &::placeholder {
    color: #ca8a8b;
    padding-left: 5px;
  }
`
const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`

const BtnWrapper = styled.div`
  //width: 50px;
  //height: 50px;
  align-self: center;
  margin-right: 10px;
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
        <BtnWrapper>
          <TodoBtn 
            type="button"
            onClick={onButtonClick}
          >
            +
          </TodoBtn>
        </BtnWrapper>
      </Form>
    </Container>
  )
}

export default NewTodo