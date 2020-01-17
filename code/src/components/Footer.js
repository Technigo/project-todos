import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {tasks} from 'reducers/tasks'

export const Footer = ({props}) => {
  const dispatch = useDispatch()

  const handleClearButtonClick =() =>{
  dispatch(tasks.actions.clearForm(props))
  }
    return (
      <>
      <button type="button" onClick={handleClearButtonClick}>Clear </button>
        
      </>
    )
  }