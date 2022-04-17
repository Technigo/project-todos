import React, {useState } from 'react'
import {useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import styled from 'styled-components'

import tasks from 'reducers/Tasks'


const NewTodoArea = styled.section `
margin: 40px auto 5px;
padding: 16px;
min-height: 370px;
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
width: 30%;
background-color: transparent;
color: #494a4b;
font-size: 1.3rem;
font-family: "Architects Daughter", sans-serif;
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
        <form onSubmit={onFormSubmit}>
            <label> 
                New Task : &nbsp; 
                <InputArea 
                type="text"
                value={toDo}
                onChange={(e) => setToDo(e.target.value)}
                />
            </label>
            <button type="submit">Add new task</button>
        </form>
        <button onClick={onRemoveAll}>Clear all tasks!</button>
        </NewTodoArea>
    )
}

export default AddTodo