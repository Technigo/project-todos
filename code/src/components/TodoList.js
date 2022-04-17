import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import tasks from 'reducers/Tasks'


const TodoArea = styled.section `
margin: 40px auto 5px;
padding: 16px;
min-height: 370px;
max-width: 300px;
background-color: #f1f5f8;
background-size: 40px 40px;
border-radius: 20px;
box-shadow: 4px 3px 7px 2px #00000040;
font-family: 'Architects Daughter', sans-serif;
`

const ToDos = styled.article `
border: 1px solid #dcdcdc; 
padding: 10px;
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

const CheckButton = styled.button `
background: #FBDA61; 
border: 1px solid #000;
border-radius: 5px;
padding: 5px;
margin-top: 10px;
margin-right: 20px;
cursor: pointer;
`

const UncheckButton = styled.button `
background: #FBDA61; 
border: 1px solid #000;
border-radius: 5px;
padding: 5px;
margin-top: 10px;
margin-left: 20px;
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
    <TodoArea >
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
        <CheckButton onClick={CheckAllTodo}>Check all todos✔</CheckButton>
        <UncheckButton onClick={unCheckAllTodo}>Uncheck all todos⬜</UncheckButton>
    </TodoArea >

    ) 
}

export default TodoList