import React, { useState } from 'react'

// Mental note: useSelector reads from the store, and useDispatch makes it possible to dispatch actions to it.
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'

import './footer.css'
import ic_plus from '../assets/ic_plus.svg'
import ic_random from '../assets/ic_random.svg'

export const Footer = () => {
  const dispatch = useDispatch()
  
  // Store the task text in the state variable. 
  const [newTaskText, setNewTaskText] = useState('')

  const addTodo = (event) => {
    event.preventDefault()
    
    // Dispatch – send – the newTaskText to redux(?)
    dispatch(
      todos.actions.addTodo(newTaskText)
    )
    // Clear the input field when entering
    setNewTaskText("")
  }
  const addRandomTodo = (event) => {
    event.preventDefault()
    
    dispatch(
      todos.actions.addRandomTodo()
    )
  }

  return (
    <footer className="input-footer">
      <form>
        <input 
          type="text" 
          className="todo-input"
          placeholder="What do you want to do today?"
          value={newTaskText}
          onChange={(event) => setNewTaskText(event.target.value)}
          tabIndex="0"
        >
        </input>

        <button 
          className="button-primary"
          // Disable button if its too short
          disabled={newTaskText < 2}
          onClick={addTodo}
        >
          <img src={ic_plus} alt="Add todo"></img>
        </button>
        <button
          className="button-secondary" 
          onClick={addRandomTodo}
        >
          <img src={ic_random} alt="Add random todo"></img>
        </button>

      </form>
    </footer>
  )
}