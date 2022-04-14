import React, {useState } from 'react'
import {useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import styled from 'styled-components'

import tasks from 'reducers/Tasks'

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
                <input 
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