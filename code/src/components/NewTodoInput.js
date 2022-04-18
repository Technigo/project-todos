import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  {todos} from '../reducers/todos'
import styled from 'styled-components'
import { ToDoPage } from 'pages/TodoPage'
import { useNavigate } from 'react-router'


const Section = styled.header`
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
const Input = styled.input`
    width:200px;
    max-width:400px;
`
const Select = styled.select`
    width:200px;
    max-width:400px;
`

export const NewTodoInput = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState('')
    const [category, setCategory] = useState('')
    const [dueDate, setDueDate] = useState('')
    
    const dispatch = useDispatch();

    const onAddTodo = (event) => {
        event.preventDefault()
        dispatch(todos.actions.addTodo([input, dueDate, category]))
        setInput('')
        setDueDate('')
        navigate(-1)
        
    }

    return (
        <Section>
            <Form onSubmit={onAddTodo}>
                <Input required type="text" value={input} onChange={event => setInput(event.target.value)}/>
                <Input type="date" value={dueDate} onChange={event => setDueDate(event.target.value)}/>
                <Select value={category} onChange={event => setCategory(event.target.value)}>
                    <option value="" disabled selected hidden>Choose category</option>
                    <option value="hobbies">Hobbies 🤸‍♀️</option>
                    <option value="home">Home 🏠</option>
                    <option value="shopping">Shopping 🛒</option>
                    <option value="studies">Studies 📚</option>
                    <option value="work">Work 💼</option>
                </Select>
                
                
                <SubmitButton type='submit'>Add task</SubmitButton>
            </Form>
        </Section>
    )
}