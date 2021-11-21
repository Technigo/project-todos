import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import todos from '../reducers/todos'
import AddTodo from './AddTodo'
import Header from './Header'



const TodoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 100px;
  margin-bottom: 12px;
`
const TodoItem = styled.section`
  width: 100%;
  padding: 10px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid peachpuff;
  border-radius: 5px 5px 5px 5px;
  margin-bottom: 6px;
  background: whitesmoke;
`
const TodoItemLeft = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 22px;
    margin-left: 6px;
  }

  input:checked:before {
    .checkbox:checked:before{
background-color:green;
}
  }
`

const ToDoParagraph = styled.div`
  display: block;

  .dateCreated {
    font-size: 12px;
    font-style: italic;
  }
`

const DateCreated = styled.p`
  font-size: 8px;
`
const TrashbinButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent; 
`

const TodoList = () => {
  const items = useSelector(store => store.todos.items) //reference the slice with store.todos
  const noItems = useSelector((store) => store.todos.items.length === 0)
  const dispatch = useDispatch()
  const clearIcon = <FontAwesomeIcon icon={faTrashAlt} />
  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const clearTodo = (id) => {
    dispatch(todos.actions.clearTodo(id))
  }

  const currentDate = () => {
    return new Date().toLocaleDateString("sv-SV", ({ year: 'numeric', month: 'numeric', day: 'numeric' }));
  }

  return (
    
    <TodoContainer>
      
      {items.map((item, index) => (
          <TodoItem key={item.id}>
            <TodoItemLeft>
              <input 
                type="checkbox" 
                checked={item.isComplete} 
                onChange={() => onToggleTodo(item.id)} 
              />
              <ToDoParagraph>
                <p>{item.text}</p>
                <p className = "dateCreated">created {currentDate()}</p> 
              </ToDoParagraph>
          
            </TodoItemLeft>

            <TrashbinButton onClick={() => clearTodo(item.id)}>{clearIcon}</TrashbinButton>
          </TodoItem>
      ))}
      <AddTodo/>
    </TodoContainer>
  ) 
}
 
export default TodoList;