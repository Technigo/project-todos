import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ToDo } from 'reducers/ToDo'
import {Select } from "library/Select"
/* import DatePicker from "react-date-picker"https://reactdatepicker.com/  still working on it :)*/
import {Button}from "library/Button"
import {Title, Subtitle} from "library/Text"
import styled from "styled-components/macro"
/* import {goldback} from "./goldback" */

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
    <Main>
    <Title>Celebrate the journey!</Title>
    <Subtitle> Remember to balance work and play </Subtitle>
    <Form onSubmit={handleSubmit}>
    {/*   <goldback> */}
      <Label>
        
        Add a To-Do: 
        <Input type="text" value={ name} onChange={(event) => setName(event.target.value)} />
      </Label>
      
     {/*  <label>
          Due Date
        <DatePicker onChange={(date) => setDueDate(date)} value={dueDate} />
        </label> */}
        <Label>
        Category:
      
        <Select 
          value={category}
          onChange={(event) => setCategory(event.target.value)}>
            <option value= "work">Work</option>
            <option value= "play">Play</option>
        </Select>
      </Label>
      <Button type="submit">ADD NEW</Button>
     {/*  </goldback> */}
    </Form>
    </Main>
  )
}


export const Form = styled.form`
width:70%;
padding: 2rem;
display: flex;
flex-direction:column;
align-items: center;
background-color: lemonchiffon;
line-height: 50px;
`;

export const Main = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Label = styled.label`
font-family: 'Roboto', sans-serif;
font-size: 1rem;
`;
 export const Input = styled.input`  /*  WHY is the focus not working??? */
 height:1.2rem;
 border: solid 1px slategray;
 &:focus {
    border: yellow;
  }
 `;