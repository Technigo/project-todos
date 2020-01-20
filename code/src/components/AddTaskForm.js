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
      <Label>
        <Button className="button" type="submit"> <span>+</span> </Button>
        <Input type="text" placeholder="Add a new task" value={text} onChange={(event) => setText(event.target.value)} />
      </Label>
    </form>
  )
}

const Input = styled.input`
  width: 250px;
  height: 30px;
  background-color: white;
  text-align: left;
  border-radius: 5px;
  font-size: 16px;
  color: darkblue;
  margin-left: 10px;
  padding: 5px;
`

const Label = styled.div`
  background-color: white;
  width: 350px;
  padding: 20px;
  padding-top:40px;
`

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #8aa8e9;
  text-align: center;
  line-height:14px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  // margin-top: 25px;
  // margin-bottom: 50px;
  padding: 3px;
`