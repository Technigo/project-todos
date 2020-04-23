import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoStore } from 'reducers/todoStore'

export const TodoInput = () => {
  const dispatch = useDispatch()
  const [todoInputValue, setTodoInputValue] = useState('')

  const handleOnSubmit = (event) => {
    event.preventDefault()
    
    //This is where I will dispatch my action to save the todo to the store
    dispatch(
      todoStore.actions.addTodo({
        itemInfo: {
          // THIS IS THE PAYLOAD! It get's accessed through itemInfo (see todoStore)  
          description: todoInputValue,
          done: false
        }
      }))
    //Clear the textfield
    setTodoInputValue(" ")
  }


  return (
    <form
      className='todo-input-form'
      onSubmit={handleOnSubmit}>
      <input
        type='text'
        onChange={e => setTodoInputValue(e.target.value)}
        placeholder='type todo here...'
        value={todoInputValue}
        className='todo-input-text' 
        required/>
      <input
        type='submit'
        value='Add todo'
        className='todo-submit-button'>
      </input>
    </form>
  )
}