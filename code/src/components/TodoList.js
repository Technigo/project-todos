import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import tasks from 'reducers/Tasks'


const ToDos = styled.article `
border: 1px solid #dcdcdc; 
padding: 5px;
margin-bottom: 5px;
border-radius: 5px;
position: relative;
`

const DeleteButton = styled.button `
position: absolute;
top: 10px;
right: 10px;
background: none; 
border: none;
cursor: pointer;
`


const TodoList = () => {
    const todoList = useSelector((store) => store.tasks.taskList)
    const dispatch = useDispatch()

    const onTodoToggle = (todoId) => {
        dispatch(tasks.actions.toggleTodo(todoId))
    }

    const onDeleteTodo = (index) => {
        dispatch(tasks.actions.deleteTodo(index))
    }

    const CheckAllTodo = () => {
        dispatch(tasks.actions.checkAllTodo())
    }

    const unCheckAllTodo = () => {
        dispatch(tasks.actions.unCheckTodo())
    }

    const dateFormat = 'DD/MM/YY HH:MM';
    const createdAt = moment().format(dateFormat)


    return (
    <section>
        {todoList.map((todo, todoIndex) => (
            <ToDos key={todo.id}>
                <h2>{todo.name}</h2>
                <p>Created at {createdAt}</p>
                <label>
                    <span>Finished</span>
                    <input 
                    type='checkbox' 
                    checked={todo.isChecked} 
                    onChange={() => onTodoToggle(todo.id)}/>
                </label>
                <DeleteButton onClick={() => onDeleteTodo(todoIndex)}>
                    <span role='img' aria-label='delete'>❌</span>     
                </DeleteButton>
            </ToDos>
        ))}
        <button onClick={CheckAllTodo}>Check all todos</button>
        <button onClick={unCheckAllTodo}>Uncheck all todos</button>
    </section>

    ) 
}

export default TodoList