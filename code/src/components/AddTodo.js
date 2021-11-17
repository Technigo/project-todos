import React, { useState } from "react";
import { useDispatch } from "react-redux";

import todos from "reducers/todos";
import { AddTaskButton, TextInput, InputButton, InputContainer } from "./StyledComponents";

const AddTodo = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [canWrite, setCanWrite] = useState(false);
  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
  } 
  const handleCreateTask = () => {
    setCanWrite(true);
  }
  const handleFormSubmit = (event) => {
		event.preventDefault()
  }

  return (
    <>
    <InputContainer>
      {!canWrite && <AddTaskButton onClick={() => handleCreateTask()}><span>+ Add task</span></AddTaskButton>}
      {canWrite && 
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="input">
          <TextInput 
            name="input"
            type="text" 
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Write your task"
            required
          />
          <InputButton onClick={onAddTodo}>Add</InputButton>
        </label>
      </form>
      }
    </InputContainer>
    </>
  )
}

export default AddTodo