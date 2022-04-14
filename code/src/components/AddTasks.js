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

    @media ${devices.desktop}{
        width: 375px;
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
    width: 330px;
    padding: 10px;
    border: 3px solid #4C4EF9;
    border-radius: 10px;
    background-color: rgb(216, 216, 239);

    @media ${devices.tablet} {
        width: 500px;;
        }

    @media ${devices.desktop} {
        width: 330px;
    }
`

const AddButton = styled.button`
    width: 300px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px #4C4EF9;
    padding: 6px;
    margin: 7px 0 25px 0;
    background-color: #91B3FA;
    color: white;
    font-family: 'Acme', sans-serif;
    font-size: 16px;
    cursor: pointer;

    &:active {
        box-shadow: 0 4px #4C4EF9;
        transform: translateY(3px);
        transition: 0.5s;
    }

    &:disabled {
        color: gray;
        cursor: default;
        transform: translateY(0);
        transition: none;
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
                        type="submit"
                        disabled={inputValue.length < 2}>
                        Add task
                    </AddButton>
                </Form>
            </Container>
        </article>
    )
}

export default AddTasks