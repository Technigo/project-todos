import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {tasks} from 'reducers/tasks'
import './footer.css'

export const Footer = ({props}) => {
  const tasks = useSelector((store) =>store.tasks.items)
  const dispatch = useDispatch()
  const completed = tasks.filter(item => item.complete)


 
    return (
      <section className='footer'>
        <h4>still to do: {completed.length}</h4>
        <button className='clearButton' type="button" onClick={() => dispatch(tasks.actions.clearForm())}>Clear</button>
      </section>
    )
  }