import React from 'react'
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodosDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
`
const TodosCheckbox = styled.input`
    width:30px;
    height:30px;
    margin: 10px;
`
const TodosRemove = styled.button`
    padding: 10px 20px;
    border: none;
    margin: 10px;

`

const TodoList = () => {
    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()

    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }

    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }
    
    return (
        <section>
        {items.map((item, index) => (
            <TodosDiv key={item.id}>
                <TodosCheckbox type="checkbox" checked={item.isComplete} onChange={() => onToggleTodo(item.id)}/>
                <p>{item.text}</p>
                <TodosRemove onClick={() => onDeleteTodo(item.id)}>Remove</TodosRemove>
            </TodosDiv>
        ))}
        </section>
    )
}

export default TodoList