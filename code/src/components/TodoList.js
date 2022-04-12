import React from "react"
import { useSelector, useDispatch } from "react-redux"
import todos from "../reducers/todos"
import styled from "styled-components"

const Button = styled.button`
  backgroundcolor: whitesmoke;
  font-family: "Inconsolata";
  border-radius: 10px;
  padding: 10px;
  font-size: 10px;
  margin-top: 7px;
  cursor: pointer;
`

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
  const dispatch = useDispatch()

  const onToggleToDo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodo = (index) => {
    dispatch(todos.actions.deleteTodo(index))
  }

  return (
    <section>
      {items.map((item, index) => (
        <div className='todo-item' key={item.id}>
          <input
            type='checkbox'
            checked={item.isComplete}
            onChange={() => onToggleToDo(item.id)}
          />
          <p>{item.text}</p>
          <Button onClick={() => onDeleteTodo(index)}>
            <span role='img' aria-label='minus'>
              ➖
            </span>
          </Button>
        </div>
      ))}
    </section>
  )
}

export default TodoList
