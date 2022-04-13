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
width: 95%;
padding: 10px;

@media ${devices.tablet} {
    width: 65%;
}

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

           <label>
               New task: &nbsp;
           <Textarea
            type="text"
            placeholder= "I will remember to do this..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />

           </label>
           &nbsp;
        <button 
        type="submit">
            Submit
        </button>
        </Form>
        </Container>

    )
}


export default AddTask