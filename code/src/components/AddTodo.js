import React, { useState } from 'react'
import { useDispatch }  from 'react-redux'

import todos from '../reducers/todos'

const AddTodo = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
  }

 
  // const onKeyDown = () => {
  //   if (event.key === 'Enter') {
  //     console.log('hej')
  //   }
  // }

  return (
    <div>
      <input 
        type="text" 
        value={input}
        placeholder="make coffee" 
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={onAddTodo}>+</button>
    </div>
  )
}
 
export default AddTodo;