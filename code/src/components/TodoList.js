import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import tasks from 'reducers/Tasks'

const TodoContainer = styled.section`
background-color: #F5F3F4;
position: relative;
margin: 50px;
padding: 20px;
min-height: 16rem;
min-width: 16rem;
box-shadow: 4px 3px 5px 3px #000;
`

const TodoCard = styled.article`
position: relative;
border: 1px solid #000;
border-radius: 5px;
background-color: #E3F2FD;
padding: 10px;
margin: 10px 5px;
display: flex;
flex-direction: column;
`

const TodoText = styled.p`
font-size: 20px;
font-weight: 500;
margin: 5px;
`

const CreatedAt = styled.p`
font-size: 14px;
align-self: flex-end;
padding-top: 5px;
`

const DeleteTodo = styled.button`
position: absolute;
top: 20px;
right: 10px;
background: none;
border: none;
font-size: 16px;
cursor: pointer;
`
const ButtonContainer = styled.div`
display: flex;
justify-content: flex-start;
`
const CheckallButton = styled.button`
background-color: #FFF;
border: 1px solid #000;
width: 5rem;
padding: 5px;
border-radius: 10px;
margin: 5px;
font-size: 10px;
cursor: pointer;
`

const UncheckButton = styled.button`
background-color: #FFF;
border: 1px solid #000;
width: 5rem;
padding: 5px;
border-radius: 10px;
margin: 5px;
font-size: 10px;
cursor: pointer;
`
const RemoveAllButton = styled.button`
background-color: #FFF;
border: 1px solid red;
width: 5rem;
padding: 5px;
border-radius: 10px;
margin: 5px;
font-size: 10px;
cursor: pointer;
`




const TodoList = () => {
    const todoList = useSelector((store) => store.tasks.taskList)
    const dispatch = useDispatch()

    const onTodoToggle = (todoId) => {
        dispatch(tasks.actions.toggleTodo(todoId))
    }

    const onDeleteTodod = (index) => {
        dispatch(tasks.actions.deleteTodo(index))
    }

    const CheckAllTodo = () => {
        dispatch(tasks.actions.checkAllTodo())
    }

    const unCheckAllTodo = () => {
        dispatch(tasks.actions.unCheckTodo())
    }

    const onRemoveAll = () => {
        dispatch(tasks.actions.deleteAllTodos())
    }

    //To store date and time when todo is created
    const dateFormat = 'DD/MM/YY HH:MM';
    const createdAt = moment().format(dateFormat)

    
    return (
     <TodoContainer> 
            {todoList.map((todo, todoIndex) => (
                <TodoCard key={todo.id}>
                    <TodoText>{todo.name}</TodoText>
                    <label>
                        Check!
                    <input 
                        type='checkbox'
                        checked={todo.isChecked}
                        onChange={() => onTodoToggle(todo.id)}
                    />
                    </label>
                    <CreatedAt>Created at {createdAt}</CreatedAt>
                    <DeleteTodo onClick={() => onDeleteTodod(todoIndex)}>
                        <span role='img' aria-label='delete'>❌</span>
                    </DeleteTodo>
                </TodoCard>
            ))}
           <ButtonContainer>
            <CheckallButton onClick={CheckAllTodo}>Check all</CheckallButton>
            <UncheckButton onClick={unCheckAllTodo}>Uncheck all</UncheckButton>
            <RemoveAllButton onClick={onRemoveAll}>Clear all todos</RemoveAllButton>
            </ButtonContainer>
            
        </TodoContainer>
    )

}

export default TodoList

//To reach the toggleTodo we need to write dispatch(tasks.actions.toggleTodo()
// (todo.id) todo because when mapping each object is named todo
//Because there is a lot of code to pass in its easier/more clean to store it in a variable an pass that variable