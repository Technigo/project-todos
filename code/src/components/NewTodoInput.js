import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  {todos} from '../reducers/todos'
import styled from 'styled-components'


const Section = styled.header`
    background-color: #e9ecef;
    width: 100vw;
    max-width: 500px;
    padding:20px;
`
const Form = styled.form`
    display: flex;
    flex-direction:column;
    align-items: center;
    gap:1rem;
`
const SubmitButton = styled.button`
    width: fit-content;
`

export const NewTodoInput = () => {
    const [input, setInput] = useState('')
    const [category, setCategory] = useState('')
    const [dueDate, setDueDate] = useState(new Date())
    
    const dispatch = useDispatch();

    const onAddTodo = (event) => {
        event.preventDefault()
        dispatch(todos.actions.addTodo(input))
        setInput('')
    }

    return (
        <Section>
            <Form onSubmit={onAddTodo}>
                <input required type="text" value={input} onChange={event => setInput(event.target.value)}/>
                <SubmitButton type='submit'>Add task</SubmitButton>
            </Form>
        </Section>
    )
}