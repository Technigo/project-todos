import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import {todos} from 'reducer/todos'

const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 0 35px 0 35px;
    box-sizing: border-box;
`

// const AddButton = styled.button`
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     border: none;
//     color: #fff;
//     font-size: 40px;
//     font-weight: 700;
//     background-color: #FBC2EB;

// style={{background: 'linear-gradient(120deg, #FBC2EB 0%, #ABC1EE 80%'}}
// +
// `

const AddButton = styled.button`
    width: 90px;
    height: 40px;
    border-radius: 20px;
    background-color: #2D2D2C;
    border: none;  
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    
`


const TaskInput = styled.textarea`
    width: 100%;
    padding: 15px;
    /* margin-left: 35px; */
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #F0F0F0;
    margin-bottom: 15px;
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
        <FormContainer>
            
                <TaskInput
                    rows='3'
                    value={text}
                    placeholder='Your next task'
                    onChange={(event) => setText(event.target.value)}
                ></TaskInput>
            
            <AddButton onClick={handleSubmit}>Add</AddButton>
        </FormContainer>
    )
}