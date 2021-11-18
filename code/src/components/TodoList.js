import React from 'react'
import moment from 'moment';
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodosDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: blanchedalmond;
    border-top: 1px solid lightblue;
    &:nth-child(odd) {
        background: antiquewhite;
      }
    &:last-child {
        border-radius: 0 0 20px 20px;
    }
`
const TodoTextDiv = styled.div`
    padding: 10px;
    max-width: 300px;
`
const CheckboxDiv = styled.div`
    padding-right: 10px;
    border-right: 1px solid #F1C8D5;
`
const TodosCheckbox = styled.input`
    width: 30px;
    height: 30px;
    margin: 10px 10px 10px 20px;
    filter: grayscale(60%) sepia(10%) brightness(180%);
`
const TodosRemoveButton = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    margin: 10px;
    background-color: #F1C8D5;
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
                <CheckboxDiv>
                    <TodosCheckbox type="checkbox" checked={item.isComplete} onChange={() => onToggleTodo(item.id)}/>
                </CheckboxDiv>
                <TodoTextDiv>{item.text}</TodoTextDiv>
                <div>
                    <span>{moment(item.createdAt).format('hh:mm')}</span>
                    <TodosRemoveButton onClick={() => onDeleteTodo(item.id)}>Clear</TodosRemoveButton>
                </div>
            </TodosDiv>
        ))}
        </section>
    )
}

export default TodoList