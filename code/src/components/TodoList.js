import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'
import RemoveTodo from './RemoveTodo'
import TodoItem from './TodoItem'



const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
  const dispatch = useDispatch()
  return (

    <div>
      {items.map(todo => (
        <div key={todo.id}>
          <TodoItem

            decription={todo.decription}
            checkedComplete={todo.isComplete}
            onChangeToggle={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
          <RemoveTodo onClickRemove={() => dispatch(todos.actions.removeTodo(todo.id))} />
        </div>
      ))}
    </div>

  )

}

export default TodoList