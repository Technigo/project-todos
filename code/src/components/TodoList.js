import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import { StyledCheckBox, TodoWrapper } from './StyledTodoList'

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
  const completeItems = useSelector((store) => store.todos.items.isComplete)

  const numberOfTodos = items.length
  // let completeBox = document.getElementsByClassName('completed')
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
      <div>
        <p>You have {numberOfTodos} tasks to do!</p>
      </div>
      {items.map((item) => (
        <TodoWrapper key={item.id}>
          <div>
            <StyledCheckBox
              className='checkbox'
              type='checkbox'
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <p
              className={item.isComplete ? 'complete-todo' : 'uncomplete-todo'}
            >
              {item.text}
            </p>
          </div>
          <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
        </TodoWrapper>
      ))}

      {/* <div>You have completed {completeTodos} tasks!</div> */}
    </div>
  )
}
