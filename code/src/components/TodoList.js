import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import todos from '../reducers/todos'


const TodoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 200px;
`
const Section = styled.section`
  display: flex;
  align-items: center;
`

const TodoList = () => {
  const items = useSelector(store => store.todos.items) //reference the slice with store.todos

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  //v1
  // const onDeleteTodoMutability = (index) => {
  //   dispatch(todos.actions.deleteTodo(index))
  // }

  
  const clearTodo = (id) => {
    dispatch(todos.actions.clearTodo(id))
  }

  

  return (
    <TodoContainer>
      {items.map((item, index) => (
          <Section key={item.id}>
            <input 
              type="checkbox" 
              checked={item.isComplete} 
              onChange={() => onToggleTodo(item.id)} 
            />
            <p>{item.text}</p> 
            <button onClick={() => clearTodo(item.id)}>Clear</button>
          </Section>
      ))}
    </TodoContainer>
  ) 
}
 
export default TodoList;