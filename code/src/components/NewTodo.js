import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { DatePicker, DatePickerInput } from 'carbon-components-react'

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
  align-items: flex-end;
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
  align-self: center;
  margin-right: 10px;
`
const TodoInput = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 5px;
  width: 288px;
  height: 38px;
  border: none;
  border-bottom: 2px solid #8B98F9;
  font-size: 20px;

  &::placeholder {
    color: #8B98F9;
    padding-left: 5px;
  }

  @media (min-width: 998px) {
    margin-left: 10px;
    width: 60%;
  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  

  @media (min-width: 998px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`

const DatePickerWrapper = styled.div`
 @media (min-width: 998px) {
    margin-right: 40px;
 }
`
const NewTodo = () => {
  const dispatch = useDispatch()

  const [dueDate, setDueDate] = useState('')
  const [newTodoInput, setNewTodoInput] = useState('')
  

  const onInputChange = (event) => {
    setNewTodoInput(event.target.value)
  }

  const onButtonPress = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.postNewTodoAPI({ description: newTodoInput, dueDate: dueDate }))
    setNewTodoInput('')
  }

  const onDateChange = (date) => {
    setDueDate(date[0].toJSON())
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
          <DatePickerWrapper>
            <DatePicker light className="testing" dateFormat="m/d/Y" datePickerType="single" onChange={(date) => onDateChange(date)}>
              <DatePickerInput
                hideLabel
                id="date-picker-default-id"
                className="testing-input"
                size="md"
                placeholder="due date"
                labelText="Due Date"
                type="text"
                //date={dueDate}
                
              />
            </DatePicker>
          </DatePickerWrapper>
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