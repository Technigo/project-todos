import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onToggleAllTodos = (checked) => {
    dispatch(todos.actions.toggleAllTodos(checked))
  }

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  // v1
  //   const onDeleteTodo = (index) => {
  //     dispatch(todos.actions.deleteTodo(index))
  //   }

  // v2
  const onRemoveTodo = (id) => {
    dispatch(todos.actions.removeTodo(id))
  }

  const updateStatus = (id, value) => {
    dispatch(todos.actions.changeStatus({ id, value }))
  }

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>
              <label className='checkbox'>
                <input
                  type='checkbox'
                  // test each element and return a boolean value
                  checked={items.every((item) => item.isComplete)}
                  onChange={(event) => onToggleAllTodos(event.target.checked)}
                />
              </label>
            </th>
            <th>Task</th>
            <th>Status</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={item.isComplete}
                    onChange={() => onToggleTodo(item.id)}
                  />
                </label>
              </td>
              <td className={item.isComplete ? 'completed' : ''}>
                {item.text}
              </td>
              {/* <button type='button' onClick={() => onDeleteTodo(index)}>
            Delete
          </button> */}
              <td>
                <select
                  value={item.status}
                  onChange={(event) => {
                    updateStatus(item.id, event.target.value)
                  }}
                >
                  <option value='todo'>Todo</option>
                  <option value='in progress'>In Progress</option>
                  <option value='completed'>Completed</option>
                </select>
              </td>
              <td>
                <button
                  type='button'
                  className='remove-button'
                  onClick={() => onRemoveTodo(item.id)}
                >
                  <i className='fas fa-trash' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TodoList
