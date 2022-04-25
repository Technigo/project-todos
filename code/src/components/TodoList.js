import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {todos} from '../reducers/todos'
import styled from "styled-components"
import moment from "moment"
import DoneImage from  '../assets/done.jpg'

const Todosection = styled.section`
    max-width: 500px;
    padding:20px;
    margin:20px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    
`
const Todoinput = styled.input`
    margin:0;
    padding:0;
    
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
`
const Deletebutton = styled.button`
    margin-left:auto;
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
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
  font-size: 0.6rem;
  letter-spacing: 1px;
  font-weight: 500;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: 1px solid #000;
  background-color:#e9ecef;

  @media (min-width: 480px){
    font-size: 1rem;
  }
 
  :hover {
    border-bottom: 1px solid #017DFF;
    color: #017DFF;
  }
  :focus {
    border-bottom: 1px solid #017DFF;
    color: #017DFF;
  }
  :active {
    border-bottom: 1px solid #017DFF;
    color: #017DFF;
  }
`
const Imagesection = styled.section`
    max-width: 500px;
    margin:0 20px 20px 20px;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color: #fff;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    min-height:80%;
`
const Img = styled.img`
  width:90%;
  @media (min-width: 768px){
      width: 95%;
  }
`

const ButtonDiv= styled.div`
    display:flex;
    align-items: center;
    gap:1rem;
    margin-top:1rem;
    padding:20px; 
`
const ClearButton = styled.button`
border-radius: 10px;
box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
display: inline-flex;
align-items: center;
justify-content: center;
width: contend-fit;
padding: 10px;
border: none;
fill: currentColor;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
-moz-appearance: none;
-webkit-appearance: none;
overflow: hidden;
transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
background-color: #017DFF;
color: #fff;
`
const CompleteButton = styled.button`
border-radius: 10px;
box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
display: inline-flex;
align-items: center;
justify-content: center;
width: contend-fit;
padding: 10px;
border: none;
fill: currentColor;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
-moz-appearance: none;
-webkit-appearance: none;
overflow: hidden;
transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
background-color: #017DFF;
color: #fff;
`

const UncompleteButton = styled.button`
border-radius: 10px;
box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
display: inline-flex;
align-items: center;
justify-content: center;
width: contend-fit;
padding: 10px;
border: none;
fill: currentColor;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
-moz-appearance: none;
-webkit-appearance: none;
overflow: hidden;
transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
background-color: #017DFF;
color: #fff;
`
const Tags = styled.div`
  display:flex;
  gap:1rem;
`
const Tag = styled.p`
font-weight: bold;
padding:5px 10px;
width:fit-content;
font-size:0.9rem;
box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);

`
export const ToDoList = () => {
    

    const items = useSelector(store => store.todos.items)
    const [filter, setFilter] = useState('all')
    const uncompletedTasks = items.filter(item => item.isComplete === false)
    const completedTasks = items.filter(item => item.isComplete === true)
    const onDeleteAll = () => {
        dispatch(todos.actions.deleteAll())
    }
    const onCompleteAll = () => {
        dispatch(todos.actions.completeAll())
    }
    const onUncompleteAll = () => {
        dispatch(todos.actions.uncompleteAll())
    }
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
    if (items.length > 0){
    return (
        <>
        <ButtonDiv>
                <ClearButton onClick={onDeleteAll}>Clear all</ClearButton>
                <CompleteButton onClick={onCompleteAll}>Complete all</CompleteButton>
                <UncompleteButton onClick={onUncompleteAll}>Uncomplete all</UncompleteButton>
        </ButtonDiv>
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
                    <Tags>
                        {item.category.length > 0 && <Tag>{item.category}</Tag>}
                        {item.priority.length > 0 &&  
                        <Tag>{item.priority} priority {item.priority === 'High' ? 
                        <span role='img' aria-label='emoji'>🔥</span> : 
                        item.priority === 'Low' ?
                        <span role='img' aria-label='emoji'>🍀</span> : 
                        <span role='img' aria-label='emoji'>⭐</span>
                        }</Tag>}  
                        {}
                    </Tags>
                </Todosection>
            ))}
        </>
        
    )
}
    return(
        <Imagesection>
            <Img src={DoneImage} />
        </Imagesection>
)
}