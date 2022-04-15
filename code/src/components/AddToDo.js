import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components'
import uniqid from 'uniqid'

import tasks from 'reducers/Tasks'

const devices = {
    mobile: '(min-width: 375px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)'
}

const ContainerInput = styled.section`
margin: auto;
`
const Form = styled.form`
height: 50px;
width: 80%;
margin-left: 45px;
border-radius: 12px;
background-color: #FFF;
display: flex;
justify-content: center;
align-items: center;

@media ${devices.tablet} {
    height: 65px;
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
    font-size: 22px;
}
`
const SubmitButton = styled.button`
margin-right: 8px;
background-color: #99e2b4;
border: none;
border-radius: 10px;
height: 30px;
width: 50px;
cursor: pointer;

@media ${devices.tablet} {
    width; 60px;
    height: 40px;
    margin-right: 25px;
}
`


const AddTodo = () => {
    const [toDo, setToDo] = useState('')
    const dispatch = useDispatch()

    //When form submit following things should happen
    //Default refreshing page
    //New todo should be added
    //Clear the input field
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
                onChange={(event) =>setToDo(event.target.value)}
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



