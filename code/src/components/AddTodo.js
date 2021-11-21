import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import todos from '../reducers/todos'
import styled, { keyframes } from 'styled-components'

const pulseAnimation = keyframes`
0% { -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.9); }
70% { -webkit-box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
100% { -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }

0% { -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.9); }
70% { -moz-box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
      box-shadow: 0 0 0 10px rgba(255, 255, 25544, 0); }
100% { -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
`

const AddToDoSection = styled.form`
align-items: center;
margin-bottom: 20px;

input {
  background-color: whitesmoke;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  width: 150px;
  height: 30px;
  padding-left: 10px;
  font-family: Arial, Helvetica, sans-serif;
}

& ::placeholder {
  color: grey;
  padding: 2px;
}

input:focus {
  outline: none;
}

.add-btn {
  background-color: #FFD580;
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  margin-left: 5px;
  border-radius: 50px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(255, 255, 255, 0.9);
  animation-name: ${pulseAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
`

const AddTodo = () => {
  const [input, setInput] = useState("") //To keep track of the current state of text input

  const dispatch = useDispatch()

  const addTodo = (event) => {
    //When the AddTodo function is called, the action is triggered and it passes the input value
    event.preventDefault()
    dispatch(todos.actions.addTodo(input))

    //Update input field to an empty string after submitting
		setInput("")
  }

  return (
      <AddToDoSection onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Add to-do"
        value={input}
        onChange={(event) => setInput(event.target.value)} //submit input text when press enter
      />
      <button className="add-btn" onClick={addTodo} type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </AddToDoSection>
  )
}

export default AddTodo
