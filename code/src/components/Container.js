import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import FlipMove from "react-flip-move"

import todos from '../reducers/todos'
import TodoList  from 'components/TodoList'
import Input from 'components/Input'

export const Container = () => {
  const completedTodos = useSelector((store) => store.todos.items.filter((todo) => todo.isComplete === true))
  const items = useSelector((store) => store.todos.items) 
  const dispatch = useDispatch()

  return (
    <main>
      <header className='header'>
        <div>
          <h1>Your To-do's</h1>
          <FlipMove duration={250} easing="ease-in">
            {completedTodos.length > 0 &&
            <p>{completedTodos.length}/{items.length} tasks</p>
            } 
          </FlipMove>
        </div>
        <div className='header-btn'>
          <Button
            classes={{ label: 'remove-btn' }}
            size="small"
            variant="outlined"
            color="secondary"
            endIcon={<DeleteIcon />}
            onClick={()=> dispatch(todos.actions.removeAll())} 
          >
            All
          </Button>
          <Button
            classes={{ label: 'remove-btn' }}
            size="small"
            variant="outlined"
            color="secondary"
            endIcon={<DeleteIcon />}
            onClick={()=> dispatch(todos.actions.removeComplete())}
          >
            Check
          </Button>
        </div>
      </header>
      <section className='todo'>
        <TodoList />
        <Input />
      </section>
    </main>
  )
}