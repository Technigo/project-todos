import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import moment from 'moment'
import {tasks} from 'reducers/tasks'
import './header.css'




export const Header = () => {
    const [newTodo, setNewTodo] = useState('')
    const dispatch = useDispatch()
    

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(tasks.actions.addItem(newTodo))
        setNewTodo('')
    }
    return (
      <form onSubmit={handleSubmit} className='headerComponent'>
      <section className='title'>
      <h1>TO DO </h1>
      <h1>{moment().format('dddd')}</h1>
      </section>
      <label className='inputContainer'>
      <input className='newInput' type="text" value={newTodo} required placeholder='New task' onChange = {event => setNewTodo(event.target.value)}/>
      {console.log(newTodo)}
     
    
      <button className='btn-Container' type="submit"><span className="add-task-btn" role="img" aria-label="plus">+</span> </button>
      </label>

     
      
        
      </form>
    )
  }
