import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components'
import uniqid from 'uniqid'

import tasks from 'reducers/Tasks'

const devices = {
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)'
}

const ContainerInput = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Form = styled.form`
    height: 50px;
    width: 80%;
    border-radius: 12px;
    background-color: #FFF;
    display: flex;
    align-items: center;

    @media ${devices.tablet} {
        width: 50%;
    }
`

const TextInput = styled.input`
    background: none;
    border: none;
    margin-left: 12px;
    flex: 1;
    
    &:focus{
        outline:none;
    }

    @media ${devices.tablet} {
        font-size: 20px;
    }

    @media ${devices.desktop} {
        font-size: 22px;
    }
`
const SubmitButton = styled.button`
    margin-right: 8px;
    background-color: #D4ECDD;
    border: none;
    border-radius: 10px;
    height: 30px;
    width: 50px;

    @media ${devices.tablet} {
        width; 60px;
        height: 40px;
        margin-right: 25px;
    }

    @media ${devices.desktop} {
        cursor: pointer;
    }
`


const AddTodo = () => {
    const [toDo, setToDo] = useState('')
    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault()
        const addNewTodo = {
            id: uniqid(),
            name: toDo,
            isChecked: false
        }
        dispatch(tasks.actions.addTodo(addNewTodo))

        setToDo('')
    }

    return (
        <ContainerInput>
            <Form onSubmit={onFormSubmit}>
                <TextInput
                    type='text'
                    placeholder="Add new todo here..."

                    value={toDo}
                    onChange={(event) => setToDo(event.target.value)}
                />
                <SubmitButton
                    type='submit'
                    disabled={toDo === ''}>
                    Add!
                </SubmitButton>
            </Form>
        </ContainerInput>
    )
}

export default AddTodo



