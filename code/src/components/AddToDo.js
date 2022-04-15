import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import uniqid from 'uniqid'

import todos from "reducers/todos";


export const WrappAll = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

const FormContainer = styled.form`
display: flex;
flex-direction: column;
`

// const InputLabel = styled.p`
// margin-bottom: 8px;
// font-size: 14px;
// font-weight: 300;
// font-style: italic;

// `
const TitleInput = styled.input`
width: 70vw;
font-family: 'Jost', sans-serif;
font-size: 15px;
font-weight: 300;
border: none;
padding-top: 10px;
border-bottom: 1px solid;
background-color: rgb(228, 221, 203);

&:focus {
  outline:none;
}

@media (min-width: 768px) {
font-size: 20px;
width: 50vw;
}
`

const ExtraInput = styled(TitleInput)`
margin-top: 10px;
`

const AddButton = styled.button`
font-family: 'Jost', sans-serif;
margin: 20px 0 10px 0;
background: none;
border: 1px solid black;
border-radius: 5px;
width: 40vw;
padding: 5px;
align-self: center;
cursor: pointer;

&:hover {
  background-color: rgb(207, 219, 204);
  font-style: italic;
}

@media (min-width: 768px) {
  width: 25vw;
  font-size: 16px;
  
}

`

const AddToDo = () => {
  const [inputValue, setInputValue] = useState("")
  const [value, setValue] = useState("")
 

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()

    const newToDo = {
      id: uniqid(),
      name: inputValue,
      description: value,
      isDone: false
    }


    dispatch(todos.actions.addItem(newToDo))

    setInputValue("")
    setValue("")
   
  }



  return(
    <WrappAll>
   
    <FormContainer onSubmit={onFormSubmit}> 
      <label>
        {/* <InputLabel>Add: &nbsp;</InputLabel> */}
      <TitleInput required type="text" placeholder="Title" value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <ExtraInput type="text" placeholder="Description.." value={value}
      onChange={(e) => setValue(e.target.value)} />
      <AddButton type="submit">Remember this</AddButton>
    </FormContainer>
    </WrappAll>
  )

}

export default AddToDo