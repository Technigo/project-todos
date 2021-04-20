import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const NewItem = () => {

const [newTodo, setNewTodo] = useState('')
const items = useSelector((store) => store.todos.items)





const onNewTodo = (event) => {
  setNewTodo(event.target.value)
  console.log(newTodo)
}

// Create an instance of useDispatch hook
const dispatch = useDispatch()


const onSubmit = () => {
  dispatch(todos.actions.addNewTodo(newTodo))
  setNewTodo('')
}



  return (
    <>
    <input
      type="text"
      onChange={onNewTodo}
      minLength="5"
     />
    <button 
      className="add-button"
      onClick={onSubmit}
    >
      add new
    </button> 
    </>
  )  
}

export default NewItem