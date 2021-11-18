import React, { useState } from "react";
import { useDispatch } from "react-redux";

import todos from "reducers/todos";
import { AddTodoButton, TextInput, InputButton, InputContainer } from "./StyledComponents";

const AddTodo = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [canWrite, setCanWrite] = useState(false);
  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
    setInput('')
  } 
  const handleCreateTodo = () => {
    setCanWrite(true);
  }
  const handleFormSubmit = (event) => {
		event.preventDefault()
  }

  return (
    <>
    <InputContainer>
      {!canWrite && <AddTodoButton onClick={() => handleCreateTodo()}><span>+ Add todo</span></AddTodoButton>}
      {canWrite && 
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="input">
          <TextInput 
            name="input"
            type="text" 
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Add todo here"
            required
          />
          <InputButton 
          onClick={onAddTodo}
          disabled={input.length < 3}
          >Add</InputButton>
        </label>
      </form>
      }
    </InputContainer>
    </>
  )
}

export default AddTodo