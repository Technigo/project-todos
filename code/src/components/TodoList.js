import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import {
  StyledCheckBox,
  TodoWrapper,
  DeleteButton,
  TodoSection,
} from './StyledTodoList'
import Logo from '../assets/logo.png'

export const TodoList = () => {
  const [isActive, setActive] = useState(false)
  const items = useSelector((store) => store.todos.items)
  const completeItems = items.filter((listItem) => listItem.isComplete)
  const numberOfCompleteItems = completeItems.length
  // const uncompletedListItems = items.filter((listItem) => !listItem.isComplete)
  // const todaysDate = moment().format('DD MMMM')

  const numberOfTodos = items.length

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }

  const changeColorMode = () => {
    if (setActive(!isActive)) {
      return 'dark'
    } else {
      return 'default'
    }
  }

  document.getElementById('html').className = !isActive ? 'default' : 'dark'

  return (
    <>
      <div className='header'>
        <img src={Logo} alt='check-mark' width='80px' height='60px' />

        <label className='switch'>
          <input type='checkbox' onClick={() => changeColorMode()} />
          <span className='slider round'></span>
        </label>
      </div>
      <TodoSection>
        <div>
          <h1>You have {numberOfTodos - numberOfCompleteItems} tasks to do!</h1>
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
              <div>
                <p className='date'>{item.date}</p>
                <p
                  className={
                    item.isComplete ? 'complete-todo' : 'uncomplete-todo'
                  }
                >
                  {item.text}
                </p>
              </div>
            </div>
            <DeleteButton onClick={() => onDeleteTodo(item.id)}>
              Delete
            </DeleteButton>
          </TodoWrapper>
        ))}
      </TodoSection>
    </>
  )
}
