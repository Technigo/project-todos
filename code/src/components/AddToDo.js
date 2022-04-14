import React, {useState } from 'react'
import {useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import styled from 'styled-components'

import tasks from 'reducers/Tasks'


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
        <section>
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
        </section>
    )
}

export default AddTodo