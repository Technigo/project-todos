import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ToDo } from 'reducers/ToDo'
import {Select } from "library/Select"
/* import DatePicker from "react-date-picker"https://reactdatepicker.com/ */
import {Form} from "library/Form"


export const AddItemForm = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState("work")
  const [dueDate, setDueDate] = useState()

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(ToDo.actions.addItem({name, category, dueDate})) 
    setCategory("")
    setDueDate("")
    setName('')
  }

  return (
    <>
    <h1>Celebrate the journey!</h1><h2>There will always be things to do, make sure to balance work and play! </h2>
    <Form onSubmit={handleSubmit}>
      <label>
        Add a To-Do:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      
     {/*  <label>
          Due Date
        <DatePicker onChange={(date) => setDueDate(date)} value={dueDate} />
        </label> */}
        <label>
        Category:
      
        <Select 
          value={category}
          onChange={(event) => setCategory(event.target.value)}>
            <option value= "work">Work</option>
            <option value= "play">Play</option>
        </Select>
      </label>
      <button type="submit">Add it</button>
    </Form>
    </>
  )
}
