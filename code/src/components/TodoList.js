import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import { TodoContainer } from './StyledTodoList'

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
  const numberOfTodos = items.length
  // const completeTodos = useSelector(
  //   (store) => store.todos.items.isComplete === true.length
  // )

  // const numberOfCompleteTodos = completeTodos.length
  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <input
            type='checkbox'
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
        </div>
      ))}
      <div>
        <p>You have {numberOfTodos} tasks to do!</p>
      </div>
      {/* <div>You have completed {completeTodos} tasks!</div> */}
    </div>
  )
}
