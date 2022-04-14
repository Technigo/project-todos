import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";

const TodoItem = styled.article `
  border: 1px solid;
  border-color: #554D45;
  background-color: #ffd680;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  position: relative;
  margin-top: 30px;
`

const DeleteButton = styled.button `
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`


const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onItemToggle = (itemId) => {
    dispatch(todos.actions.toggleItem(itemId))
  }

  const onItemDelete = (index) => {
    dispatch(todos.actions.deleteItem(index))
  }

  

  
 
  // const date = () => {
  //   new Date()
  // }
  // const h = date.toDateString()
  // console.log(h)
  // const time = date.toLocaleTimeString()
  // console.log(time, 'klockslag')
  

  return (
    <section>
        
        {todoList.map((todoItem, itemIndex) => (
            <TodoItem key={todoItem.id} >
        <h2>{todoItem.listitem}</h2>
                <label>
                    Completed:
                    <input 
                    type="checkbox" 
                    checked={todoItem.isDone} 
                    onChange={() => onItemToggle(todoItem.id)}
                    />
                </label>
                <DeleteButton onClick={() =>onItemDelete(itemIndex)}>
                    <span role="img" aria-label="delete">⛱</span>
                </DeleteButton>
            </TodoItem>
            
        ))
        
    }
    
    </section>
    
  )
}

export default TodoList