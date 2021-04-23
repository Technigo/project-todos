import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"

import todos from "../reducers/todos"

const TaskList = styled.div`
  color: #2C2E73;
  font-family: "WrittenLies";
  font-size: 20px;
  width: 100%;
  margin-bottom: 10px;
`

const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin: 10px;
  padding-bottom: 0;
  border-bottom: solid #2C2E73;
  border-width: 0px 0px 2px 0px;
  border-radius: 0% 0% 100% 0%/2% 0% 6% 0%;
  transform: rotate(2deg);
  `
  
  const StyledParagraph = styled.p`
  margin: 0;
`

const Checkbox = styled.input`
  cursor: pointer;
`

const TrashButton = styled.button`
  background: transparent;
  border: none;
  padding: 5px;
  font-size: 20px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
  const dispatch = useDispatch()

  return (
    <TaskList>
      {items.map(todo => (
        <Task key={todo.id} className="todo-list">
          <Checkbox
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
          <StyledParagraph>{todo.description}</StyledParagraph>
          <TrashButton onClick={() => dispatch(todos.actions.removeTask(todo.id))}>
            <span role="img" alt="X mark" aria-label="X mark icon">❌</span>
          </TrashButton>
        </Task>
      ))}
    </TaskList>
  )
}

export default TodoList