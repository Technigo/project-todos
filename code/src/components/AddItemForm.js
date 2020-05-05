import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {ToDo} from "reducers/toDo"
import {Select} from "library/Select"
import {Button}from "library/Button"
import {Title, Subtitle} from "library/Text"
import styled from "styled-components/macro"
/* import {goldback} from "./goldback" */
/* import DatePicker from "react-date-picker"https://reactdatepicker.com/  still working on it :)*/

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
          {/*  Svaing for later fix   <goldback> */}
        <Label>
        
          Add a To-Do: 
          <Input type="text" 
            value={ name}
            required
            onChange={(event) => setName(event.target.value)} />
        </Label>
      
          {/* Svaing for later fix <label>
          Due Date
          <DatePicker onChange={(date) => setDueDate(date)} value={dueDate} />
          </label> */}
        <Label>
          Category:
      
          <Select 
            value={category}
            required
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
    outline-color: yellow;
}
`;