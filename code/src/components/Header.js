import React from 'react'
import moment from 'moment'

import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'

// import styled from 'styled-components'

export const Header = () => {

  const dispatch = useDispatch()

  const handleClearList = () => {
    dispatch(
      tasks.actions.removeAllTasks()
      )

    
  }
  return(
    <div>
      Todays date is: {moment().format("MMMM Do, Y")}
      <p>My To do app</p>

      <button onClick={handleClearList}>CLEAR</button>

    </div>
  )
}




