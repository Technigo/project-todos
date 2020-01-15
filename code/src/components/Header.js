import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {tasks} from 'reducers/tasks'
import './header.css'




export const Header = () => {
    const [newTodo, setNewTodo] = useState('')
    const dispatch = useDispatch()
    return (
      <form className='headerComponent'>
      <h1>TO DO: </h1>
      <form className='inputfield'>
      <input type="text" required placeholder='New task' onChange = {event => setNewTodo(event.target.value)}/>
      {console.log(newTodo)}
     
      <button className='button'
      type='button'
      onClick={()=>dispatch(tasks.actions.addItem(newTodo))}>
      Add task
      </button>
      </form>
        
      </form>
    )
  }
