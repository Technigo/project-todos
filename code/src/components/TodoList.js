import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import todos from "reducers/todos";
import { TaskLabel, FlexItem, DeleteButton, DateContainer, TaskContainer, EmptyTodoDiv } from "./StyledComponents";

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }

  return (
    <section>
      {items.length === 0 && 
      <EmptyTodoDiv>
        <img src="images/burger.png" alt="burger" className="empty-image" />
        <h3 className="empty-h3">No todos found</h3>
      </EmptyTodoDiv>}
      {items.map((item) => (
        <><FlexItem key={item.id}>
          <TaskContainer>
          <TaskLabel>
            <input className="task-input"
              name={item.id}
              type="checkbox"
              value={item.id}
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)} />
            <span className="checkmark"></span>
          </TaskLabel>
          <h2>{item.text}</h2>
          </TaskContainer>
          <DeleteButton onClick={() => onDeleteTodo(item.id)}>
            <span><img src="images/favicon-16x16.png" alt="delete" aria-label="delete-button" /></span>
          </DeleteButton>
        </FlexItem>
          <DateContainer>
            <p>Created at: {moment(item.createdAt).format('HH:MM:SS')}</p>
          </DateContainer></>
      ))}
    </section>
  )
}

export default TodoList