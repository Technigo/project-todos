import React, {useState } from 'react'
import {useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import styled from 'styled-components'

import tasks from 'reducers/Tasks'


const NewTodoArea = styled.section `
margin: 40px auto 5px;
padding: 16px;
max-width: 300px;
background-color: #f1f5f8;
background-size: 40px 40px;
border-radius: 20px;
box-shadow: 4px 3px 7px 2px #00000040;
`
const InputArea = styled.input `
border: 0;
border-bottom: 3px dashed #fdcb6e;
padding: 10px 15px;
width: 50%;
background-color: transparent;
color: #494a4b;
font-size: 1.3rem;
font-family: "Architects Daughter", sans-serif;
`

const FormArea = styled.form `
display: flex;
flex-direction: column;
flex-wrap: wrap;
`

const RemoveButton = styled.button `
background: #FBAB7E; 
border: 1px solid #000;
border-radius: 5px;
padding: 5px;
margin-top: 10px;
cursor: pointer;
`

const SubmitButton = styled.button `
background: #F7CE68; 
border: 1px solid #000;
border-radius: 5px;
padding: 5px;
margin-top: 10px;
cursor: pointer;
`

const AddTodo = () => {
    const [toDo, setToDo] = useState('')
    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault()

        const addNewTodo = {
            id: uniqid(),
            name: toDo,
            isChecked: false,
        }

        dispatch(tasks.actions.addTodo(addNewTodo))

        setToDo('')
    }

    const onRemoveAll = () => {
        dispatch(tasks.actions.deleteAllTodo())
    }

    return (
        <NewTodoArea>
        <FormArea onSubmit={onFormSubmit}>
            <label> 
                New Task : &nbsp; 
                <InputArea 
                type="text"
                value={toDo}
                onChange={(e) => setToDo(e.target.value)}
                />
            </label>
            <SubmitButton type="submit">Add new task</SubmitButton>
        </FormArea>
        <RemoveButton onClick={onRemoveAll}>Clear all tasks!</RemoveButton>
        </NewTodoArea>
    )
}

export default AddTodo