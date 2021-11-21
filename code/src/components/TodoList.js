import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import todos from '../reducers/todos'


const TodoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 200px;
`
const TodoItem = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  margin-bottom: 2px;
  padding-left: 4px;
  padding-right: 6px;
`
const TodoItemLeft = styled.div`
  display: flex;
  align-items: center;
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

  const editTodo = () => {

  }

  const clearTodo = (id) => {
    dispatch(todos.actions.clearTodo(id))
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
              <p>{item.text}</p> 
            </TodoItemLeft>

            <TrashbinButton onClick={() => clearTodo(item.id)}>{clearIcon}</TrashbinButton>
          </TodoItem>
      ))}
    </TodoContainer>
  ) 
}
 
export default TodoList;