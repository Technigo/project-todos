import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import todos from "reducers/todos";
import { TaskLabel, TaskInput, FlexItem, DeleteButton, DateContainer } from "./StyledComponents";

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
      {items.map((item) => (
        <><FlexItem key={item.id}>
          <TaskLabel>
            <TaskInput
              name={item.id}
              type="checkbox"
              value={item.id}
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)} />
          </TaskLabel>
          <h2>{item.text}</h2>
          <DeleteButton onClick={() => onDeleteTodo(item.id)}>
            <span><img src="images/favicon-16x16.png" alt="delete" aria-label="delete-button" /></span>
          </DeleteButton>
        </FlexItem>
          <DateContainer>
            <p>{moment(item.createdAt).fromNow()}</p>
          </DateContainer></>
      ))}
    </section>
  )
}

export default TodoList