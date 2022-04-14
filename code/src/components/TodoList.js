import React from "react"
import { useSelector, useDispatch } from "react-redux"
import todos from "../reducers/todos"
import styled from "styled-components"
import moment from "moment"

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
  console.log(items)
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
          <div className='todo-text-container'>
            <p className='todo-text'>{item.text}</p>
            <span className='date'>{moment().calendar()}</span>
          </div>
          <Button onClick={() => onDeleteTodo(index)}>
            <span role='img' aria-label='minus-icon'>
              ➖
            </span>
          </Button>
        </div>
      ))}
    </section>
  )
}

export default TodoList
