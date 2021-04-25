import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import uniqid from 'uniqid'

import todos from '../reducers/todos'

const Input = () => {
  const [newTodo, setNewTodo] = useState('')
  const [label, setLabel] = useState('New task')
 
  const dispatch = useDispatch()

  const handleChange = (event) => {  
    setNewTodo(event.target.value)
  }

  const handleClick = () => {
    if (newTodo.length < 3) {
      setLabel('Please enter a text')
    } else if(newTodo.length > 2) {
        dispatch(todos.actions.addTodo({
          description: newTodo,
          isComplete: false, 
          id: uniqid()
        }))
        setLabel('New task')
      }
      setNewTodo('')
  }

  return (
    <div className='input-container'>
      <TextField 
        id='standard-basic' 
        label={label}
        value={newTodo} 
        onChange={handleChange}
      /> 
      <div className='add-btn'>
        <Fab  
          onClick={handleClick} 
          size='medium' 
          color='secondary' 
          aria-label='add'
        >
          <AddIcon />
        </Fab>
      </div> 
    </div>
  )
}

export default Input