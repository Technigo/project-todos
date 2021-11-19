import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import todos from "../reducers/todos"

const AddTodo = () => {
  const [input, setInput] = useState("")

  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
    setInput("") // to clean the input box
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <AddToDoFormWrap onSubmit={handleOnSubmit}>
        <InputBox
          // required
          // content="value"
          // type="text"
          maxLength="24"
          minLength="4"
          placeholder="What will you do today?"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <AddTodoButton onClick={onAddTodo}>+</AddTodoButton>
      </AddToDoFormWrap>
    </>
  )
}

export default AddTodo

const AddToDoFormWrap = styled.form`
  background: #fff;
  max-width: 90%;
  margin: 10px 20px;
  padding: 2px;
  position: relative;
  border-radius: 4px;
  display: flex;
  align-items: center;
`

const AddTodoButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 6px;
  font-size: 40px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: rgb(23, 23, 23);
  color: rgb(255, 255, 255);
  outline: none;
  &:hover {
    color: rgb(254, 177, 36);
  }
`
const InputBox = styled.input`
  width: 100%;
  min-height: 45px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  border: 1px solid #ffbe00;
  outline: none;
  resize: none;
  margin: 3px;
  padding-left: 10px;
  font-family: "Poiret One", cursive;
`
