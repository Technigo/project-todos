import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ToDo } from 'reducers/ToDo'
import {Select } from "library/Select"
/* import DatePicker from "react-date-picker"https://reactdatepicker.com/  still working on it :)*/
import {Form} from "library/Form"
import {Button}from "library/Button"
import {Title, Subtitle} from "library/Text"



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
    <Title>Celebrate the journey!</Title><Subtitle> Remember to balance work and play </Subtitle>
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
      <Button type="submit">ADD NEW</Button>
    </Form>
    </>
  )
}
