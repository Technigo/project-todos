import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import styled from 'styled-components'

export const AddTask = () => {
  const dispatch = useDispatch()
  //state for input from the text box
  const [inputValue, setInputValue] = useState('')

  //det som händer när formet skickas
  const handleOnSubmit = (e) => {
    if (inputValue !== "") {
      e.preventDefault()

      dispatch(todos.actions.addTodo({
        //här skjuts det in som ska in i staten
        itemInfo: {
          description: inputValue,
          done: false
        }
      }))
      //den här gör textfältet tomt
      setInputValue('')
    }
  }

  return (
    <TodoInputForm
      onSubmit={handleOnSubmit}>
      <TaskInputField
        type='text'
        //FATTAR INTE DETTA att inputvalue sätts till det som jag skriver 
        //och när det skrivs något känner statet av den
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        placeholder='What do you have to do?'
      >
      </TaskInputField>
      <SubmitButton
        type='submit'
        value='Add'
      >
      </SubmitButton>
    </TodoInputForm>
  )
}

const TodoInputForm = styled.form`
  display:flex;
  justify-content: space-between;
  margin: 14px 14px 0 14px;
  padding-bottom: 14px;
  border-bottom: 1px #502F4C solid;
`

const TaskInputField = styled.input`
  margin: 0;
  padding-left: 5px;
  width: 210px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #502F4C;
  border-left: 3px solid #502F4C;
  border-right: 3px solid #502F4C;
  border-radius: 5px;
  transition: border-color .4s ease-out;
  font-family: 'Noto Sans';
  font-size: 16px;
  &:focus {
    border-color: #F9F4F5;
  }
`
const SubmitButton = styled.input`
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background-color: #502F4C;
  color:#F9F4F5;
  font-family: 'Noto Sans';
  font-size: 16px;
  cursor: pointer;
  transition: border-color .4s ease-out;
  &:hover {
    background-color: #70587C;
  }
`