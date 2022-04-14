import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddButton } from './Buttons'

import todos from 'reducers/todos'

const AddTodo = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(todo), setTodo(''))
  }

  return (
    <div className='InputWrapper'>
      <input
        className='text-input'
        type='text'
        placeholder='I want or need to...'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onAddTodo()}
      />
      <AddButton onClick={() => onAddTodo()} disabled={todo < 1}>
        +
      </AddButton>
    </div>
  )
}

export default AddTodo
