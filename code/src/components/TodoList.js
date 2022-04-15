import React from "react"
import { useSelector, useDispatch} from 'react-redux'
import {todos} from '../reducers/todos'
import styled from "styled-components"
import moment from "moment"

const Todosection = styled.section`
    width: 100vw;
    max-width: 500px;
    padding:20px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid grey;
`
const Todoinput = styled.input`
    margin:0;
    padding:0;
`
const Deletebutton = styled.button`
    margin-left:auto;
`
const TodoDiv = styled.div`
    display:flex;
    align-items:center;
    gap:1rem;
`
const Date = styled.p`
    font-style:italic;
`

export const ToDoList = () => {
    const items = useSelector(store => store.todos.items)

    const dispatch = useDispatch()

    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }

    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }

    return (
        <>
            {items.map((item, index) =>(
                <Todosection key={item.id}>
                    <TodoDiv>
                        <Todoinput type='checkbox' checked={item.isComplete} onChange={() => onToggleTodo(item.id)}/>
                        <p>{item.text}</p>
                        <Deletebutton onClick={() => onDeleteTodo(item.id)}>🗑</Deletebutton>
                    </TodoDiv>
                    <Date>Created: {moment().calendar()}</Date>
                </Todosection>
            ))}
        </>
        
    )
}