import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";

const TodoItem = styled.article `
  border: 1px solid orange;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  position: relative;
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

  const uncompletedTodos = todoList.filter(item => item.isDone === false)
  console.log(uncompletedTodos, 'test')
  console.log(todoList, 'hejhejhej')

  const currentTime = new Date()
  console.log(currentTime, 'tid')
  return (
    <section>
        <h1>Number of todos:{todoList.length}</h1>
        <h1>Uncompleted: {uncompletedTodos.length}</h1>
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