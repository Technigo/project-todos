import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {todos} from '../reducers/todos'
import styled from "styled-components"
import moment from "moment"

const Todosection = styled.section`
    max-width: 500px;
    padding:20px;
    display: flex;
    flex-direction: column;
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
const Buttons = styled.section`
    display: flex;
    padding:20px;
    justify-content: space-between;
`
const FilterButton = styled.button`
  color: #808080;
  display: flex;
  justify-content: center;
  border: none;
  font-size: 0.8rem;
  letter-spacing: 2.5px;
  font-weight: 500;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: 1px solid #000;
 
  :hover {
    border-bottom: 1px solid red;
    color: red;
  }
  :focus {
    border-bottom: 1px solid red;
    color: red;
  }
  :active {
    border-bottom: 1px solid red;
    color: red;
  }
`
export const ToDoList = () => {
    const items = useSelector(store => store.todos.items)
    const [filter, setFilter] = useState('all')
    const uncompletedTasks = items.filter(item => item.isComplete === false)
    const completedTasks = items.filter(item => item.isComplete === true)
    
    let filteredItems = items.filter(item => {
        if (filter === 'completed') {
          return item.isComplete;
        } else if (filter === 'uncompleted') {
          return !item.isComplete;
        } else return item;
      });

    const dispatch = useDispatch()

    

    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }

    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }

    return (
        <>
        <Buttons>
            <FilterButton value='all' onClick= {event => setFilter(event.target.value)}>All ({items.length})</FilterButton>
            <FilterButton value='completed'onClick= {event => setFilter(event.target.value)}>Completed ({completedTasks.length})</FilterButton>
            <FilterButton value='uncompleted'onClick= {event => setFilter(event.target.value)}>Uncompleted ({uncompletedTasks.length})</FilterButton>
        </Buttons>
            {filteredItems.map((item, index) =>(
                <Todosection key={item.id}>
                    <TodoDiv>
                        <Todoinput type='checkbox' checked={item.isComplete} onChange={() => onToggleTodo(item.id)}/>
                        <p>{item.text}</p>
                        <Deletebutton onClick={() => onDeleteTodo(item.id)}>🗑</Deletebutton>
                    </TodoDiv>
                    <Date>Created: {moment().calendar()}</Date>
                    <p>{item.dueDate.length > 0 ?  `Due date: ${moment(item.dueDate).format('ll')}`  : null}</p>
                    <p>{item.category.length > 0 ?  `Category: ${item.category}`  : null}</p>
                </Todosection>
            ))}
        </>
        
    )
}