import React, { useState } from "react";
import { useDispatch } from "react-redux";

import todos from "reducers/todos";
import { FlexItem, ButtonContainer, AddTaskButton } from "./StyledComponents";

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

  return (
    <>
    <FlexItem>
      <ButtonContainer>
      {!canWrite && <AddTaskButton onClick={() => handleCreateTask()}><span>+ Add task</span></AddTaskButton>}
      
      {canWrite && <label>
      <input 
      type="text" 
      value={input}
      onChange={(event) => setInput(event.target.value)}
      placeholder="Write your task"
      />
      <button onClick={onAddTodo}>Add</button>
      </label>}
      </ButtonContainer>
    </FlexItem>
    </>
  )
}

export default AddTodo