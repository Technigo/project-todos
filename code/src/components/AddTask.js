import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import uniqid from 'uniqid'
import tasks from 'reducers/tasks'



//styled components
const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
}

const Container = styled.div`
width: 375px;
margin: 0 auto;

@media ${devices.tablet} {
    width: 768px;
}

@media ${devices.desktop} {
    width: 1025px;
}
`

const Form = styled.form `
display: flex;
flex-direction: column;
align-items: center;
`

const Textarea = styled.input`
width: 75%;
padding: 10px;
border: none;

@media ${devices.tablet} {
    width: 65%;
}
`

const Button = styled.button`
border-radius: 8px;
border: 0.4px solid gray;
padding: 6px;
`

const Label = styled.label`
width: 80%;
border: 1px solid gray;
border-radius: 12px;
padding: 0.4rem;
`




const AddTask = () => {

    const [inputValue, setInputValue] = useState("")

    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
    event.preventDefault()

    const newTask = {
        id: uniqid(),
        name: inputValue,
        isDone: false,
    }

    dispatch(tasks.actions.addItem(newTask))

    setInputValue('')
    }



    return (
        <Container>
        <Form onSubmit={onFormSubmit}>

           <Label>
             <span role="img" aria-label="pen"> 🖋️</span>    &nbsp;
           <Textarea
            type="text"
            placeholder= "Insert new task here.."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />

           </Label>
           &nbsp;
        <Button 
        type="submit">
            Submit
        </Button>
        </Form>
        </Container>

    )
}


export default AddTask