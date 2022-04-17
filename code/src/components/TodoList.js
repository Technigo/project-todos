import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import tasks from 'reducers/Tasks'

import CustomButtons from 'components/Buttons'

const devices = {
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)'
}

const TodoContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 3.5rem;
`

const TodoCard = styled.article`
position: relative;

border-radius: 5px;
background-color: #EDF2F4;
padding: 10px;
margin: 10px 5px;
width: 80%;
display: flex;
flex-direction: column;

@media ${devices.tablet} {
    width: 50%;
}

@media ${devices.desktop} {
    width: 40%;
}
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
const Checkbox = styled.input`
margin-top: 5px;
padding: 5px;
`

const DeleteTodo = styled.button`
position: absolute;
top: 15px;
right: 10px;
background: none;
border: none;
font-size: 16px;

@media ${devices.desktop} {
    cursor: pointer;
}
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

    //To store date and time when todo is created
    const dateFormat = 'DD/MM/YY HH:MM';
    const createdAt = moment().format(dateFormat)

    
    return (
     <TodoContainer> 
            {todoList.map((todo, todoIndex) => (
                <TodoCard key={todo.id}>
                    <TodoText className={`${todo.isChecked ? 'completed' : ''}`}>{todo.name}</TodoText>
                    <label>
                    Check! &nbsp; 
                    <Checkbox 
                        type='checkbox'
                        tabIndex='0'
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
             <CustomButtons/>
        </TodoContainer>
    )

}

export default TodoList

//To reach the toggleTodo we need to write dispatch(tasks.actions.toggleTodo()
// (todo.id) todo because when mapping each object is named todo
//Because there is a lot of code to pass in its easier/more clean to store it in a variable an pass that variable