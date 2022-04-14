import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

import {
    AddTodoContainer,
    InputField,
    AddTodoBtn
  } from './Styling'


export const AddTodo = () => {

    const [input, setInput] = useState('')
    const [isActive, setIsActive] = useState(false)

    const toggleClass = () => {
        setIsActive(!isActive)
    }

    const dispatch = useDispatch()

    const onAddTodo = () => {
        dispatch(todos.actions.addTodo(input))
        setInput('') // This clears the input field
    }

    // This adds input on enter key
    const onEnter = (e) => {
        if (e.key === 'Enter') {
            onAddTodo()
        }
    }

    return(
        <>
        <AddTodoContainer className="AddTodo-container">
            <InputField 
                onKeyDown={(e) => onEnter(e)}
                placeholder='Add Todo...'
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <AddTodoBtn
                className={isActive ? 'btn-active' : 'btn-hidden'}
                disabled={input < 1}
                onClick={() => {
                    onAddTodo()
                    toggleClass()
                  }}
            >
               <span role='img' aria-label='Add'>➕</span>
            </AddTodoBtn>
        </AddTodoContainer>
        </>
    )
}

