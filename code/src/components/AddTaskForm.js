import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/Task'
import styled from 'styled-components/macro'

export const AddTaskForm = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  //event that do the submit

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addTask(text))
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Todo:
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      </label>

      <button className="button" type="submit"> Add Todo</button>


    </form>
  )


}


const button = styled.button`
  width: 70px;
  height: 20px;
  background-color: #8aa8e9;
  text-align: center;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
  color: white;
  margin: 5px;
  padding: 3px;
`