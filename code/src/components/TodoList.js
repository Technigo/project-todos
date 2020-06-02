import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { TodoItem } from './TodoItem'



const ListContainer = styled.form`
  margin: auto;
  width: 100%;
  list-style-type: none;
`
const List = styled.ul`
  list-style-type: none;
`

export const TodoList = () => {
  
  const todos = useSelector((store) => store.todos.list)

    return (
      <ListContainer>
        <List>
          {console.log(todos)}
          {todos.items.map((item, index) => (
          <TodoItem key={index} item={item} itemIndex={index}/>
          ))}
        </List>        
      </ListContainer>
    )
  }