import React, {useState} from "react"
import { useDispatch } from "react-redux"
import  {todos} from '../reducers/todos'
import styled from "styled-components"

const Todosection = styled.section`
    width: 100vw;
    max-width: 500px;
    padding:20px;
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid grey;
`

export const AddTodo = () => {

    const [input, setInput] = useState('')
    
    const dispatch = useDispatch()

    const onAddTodo = () => {
        dispatch(todos.actions.addTodo(input))
        setInput('')
    }

    return (
        <Todosection>
            <button onClick={onAddTodo}>+</button>
            <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
        </Todosection>
    )
}