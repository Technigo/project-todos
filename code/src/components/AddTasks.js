import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from "uniqid"
import styled from 'styled-components'

import tasks from 'reducers/tasks'

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
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Label = styled.label`
    margin-top: 15px;
`

const Textarea = styled.input`
    width: 95%;
    padding: 10px;

    @media ${devices.tablet} {
        width: 70%;
        }
`

const AddButton = styled.button`
    width: 300px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px #723c70;
    padding: 6px;
    margin: 7px 0 25px 0;
    background-color: #5c4d7d;
    color: white;
    font-size: 16px;
    cursor: pointer;

    &:active {
        box-shadow: 0 4px #5c4d7d;
        transform: translateY(3px);
        transition: 0.3s;
    }

    &:disabled {
        color: #723c70;
    }
`


const AddTasks = () => {
    const [inputValue, setInputValue] = useState("")

    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault()

        const newTask = {
            id: uniqid(),
            text: inputValue,
            complete: false,
        }

        dispatch(tasks.actions.addItem(newTask))

         setInputValue("")
    }

    return(
        <article>
            <Container>
                <Form onSubmit={onFormSubmit}>
                    <Label>Add new task here</Label>
                        <Textarea 
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}/>
                    <AddButton
                        type="submit">
                        Add task
                    </AddButton>
                </Form>
            </Container>
        </article>
    )
}

export default AddTasks