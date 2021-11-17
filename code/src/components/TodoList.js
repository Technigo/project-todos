import React from 'react'
import moment from 'moment';
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodosDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightgrey;
    &:nth-child(odd) {
        background: #F2F3F4;
      }
    &:last-child {
        border-radius: 0 0 20px 20px;
    }
`
const TodosCheckbox = styled.input`
    width:30px;
    height:30px;
    margin: 10px;
    filter: grayscale(50%) sepia(10%) brightness(150%);
`
const TodosRemoveButton = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    margin: 10px;
    background-color: lightpink;
`
const EmptyTodoDiv = styled.div`
    padding-top: 30px;
    height: 250px;
    border-radius: 0 0 20px 20px;
    background-color: #F2F3F4;
    text-align: center;
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
        {items.length === 0 && <EmptyTodoDiv>Ohhh, lucky you! </EmptyTodoDiv>}
        {items.map((item, index) => (
            <TodosDiv key={item.id}>
                <TodosCheckbox type="checkbox" checked={item.isComplete} onChange={() => onToggleTodo(item.id)}/>
                <p>{item.text}</p>
                <div>
                    <span>{moment(item.createdAt).format('HH:MM')}</span>
                    <TodosRemoveButton onClick={() => onDeleteTodo(item.id)}>Clear</TodosRemoveButton>
                </div>
            </TodosDiv>
        ))}
        </section>
    )
}

export default TodoList