import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { TodoItem } from './TodoItem'


const ListContainer = styled.form`
  border: 2px solid navy; 
  padding: 2em;
  margin: auto;
  list-style-type: none;
`
const List = styled.ul`
  list-style-type: none;
`

export const TodoList = () => {
  
  const todos = useSelector((store) => store.todos.list)

    return (
      <ListContainer>
        <h1>My todos:</h1>
        <List>
          {console.log(todos)}
          {todos.items.map((item, index) => (
          <TodoItem key={index} itemIndex={index} item={item}/>
          ))}
        </List>        
      </ListContainer>
    )
  }