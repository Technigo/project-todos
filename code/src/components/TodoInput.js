import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const TodoInput = ({ listId }) => {

  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')


  const handleOnSubmit = (e) => {
    e.preventDefault()

    dispatch(
      todos.actions.addTodo({
        listId: listId,
        itemInfo: {
          description: inputValue,
          done: false
        }
      })
    )

    setInputValue('')
  }

  return (
    <form
      className='todo-input'
      onSubmit={handleOnSubmit}>
      <h1>
        GET SHIT DONE
      </h1>
      <input
        type='text'
        onChange={e => setInputValue(e.target.value)}
        value={inputValue} // här är variabeln som uppdaterar i onChange
        className='todo-input-text'
        placeholder='Drink another coffee..'>
      </input>
      <input
        type='submit'
        className='button'
        value='add to list'
        disabled={inputValue === ''}>
      </input>
    </form>
  )
}