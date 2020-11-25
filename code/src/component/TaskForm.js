import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import {todos} from 'reducer/todos'


const AddButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    background-color: #FBC2EB;
`

const TaskInput = styled.textarea`
    width: 70%;
    padding: 10px;
    margin: 20px;
    border: none;
    border-radius: 10px;
    background-color: #F0F0F0;
`

export const TaskForm = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [category, setCategory] = useState('')
    

    const handleSubmit = (event) => {
        event.preventDefault(
            dispatch(todos.actions.addTask(text)),
            setText('')
        )
    }

    return (
        <form>
            <label>
                <TaskInput
                    rows='3'
                    value={text}
                    placeholder='Your next task'
                    onChange={(event) => setText(event.target.value)}
                ></TaskInput>
            </label>
            <AddButton style={{background: 'linear-gradient(120deg, #FBC2EB 0%, #ABC1EE 80%'}}onClick={handleSubmit}>+</AddButton>
        </form>
    )
}