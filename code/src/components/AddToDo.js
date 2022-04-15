import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components'
import uniqid from 'uniqid'

import tasks from 'reducers/Tasks'
import styledComponents from "styled-components";

const Form = styled.form`
height: 50px;
width: 80%;
margin: 30px;
border-radius: 12px;
background-color: #FFF;
display: flex;
justify-content: center;
align-items: center;
`

const TextInput = styled.input`
background: none;
border: none;
margin-left: 12px;
flex: 1;
&:focus{
    outline:none;
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
        <section>
            <Form onSubmit={onFormSubmit}>
                <TextInput 
                type='text'
                placeholder="Add new todo here"
                value={toDo}
                onChange={(event) =>setToDo(event.target.value)}
                />
                <SubmitButton 
                 type='submit'
                 disabled={toDo === ''}>
                    <span role='img' aria-label='plussign'>➕</span>
                </SubmitButton>
            </Form>
            
        </section>
    )
}

export default AddTodo



