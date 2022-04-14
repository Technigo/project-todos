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
width: 60%;
padding: 10px;
border: none;
font-family: 'Roboto', sans-serif;
font-size: 16px;
background: #f8f8f8;
font-weight: 400;
line-height: 1.4;

&:focus-visible {
outline: none;
}

@media ${devices.tablet} {
    width: 60%;
}
`

const Button = styled.button`
border-radius: 8px;
border: 0.4px solid gray;
padding: 6px;
font-family: 'Roboto', sans-serif;
font-size: 15px;
/*These three below removes Safari default styling*/
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
`

const HeaderBox = styled.div`
width: 89%;
border: 1px solid gray;
border-radius: 12px;
padding: 0.4rem;
background: #f8f8f8;
outline: none;

@media ${devices.tablet} {
    width: 50%;
}

@media ${devices.tablet} {
    width: 40%;
}
`




const AddTask = () => {

    const [inputValue, setInputValue] = useState("")

    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
    event.preventDefault()

    const newTask = {
        id: uniqid(),
        text: inputValue,
        isDone: false,
    }

    dispatch(tasks.actions.addItem(newTask))

    setInputValue('')
    }



    return (
        <Container>
        <Form onSubmit={onFormSubmit}>

        <HeaderBox>
           <label>
             <span role="img" aria-label="pen"> 🖋️</span> 
             &nbsp;
           <Textarea
            type="text"
            placeholder= "Insert new task here.."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />

           </label>
           &nbsp;
        <Button 
        type="submit"
        disabled={inputValue === ""}>
            Submit
        </Button>
        </HeaderBox>
        </Form>
        </Container>

    )
}


export default AddTask