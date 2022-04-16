import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";


const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  gap: 10px;

  @media (min-width: 768px) {
    align-items: center;
  }
`

const TodoItem = styled.article `
  background-color: #aac3bd;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: 400px;
  }

 
  
  input[type='checkbox'] {
    appearance: none;
    -webkit-appearance: none;
    position: relative;
    background: var(--ltgrey);
    border: 2px solid var(--darkblgr);
    padding: 10px;
    border-radius: 50%;
    height: 27px;
    width: 27px;
  }
  
  input[type='checkbox']:checked {
    background: var(--plum);
    background-image: url("icons/check.svg");
  }
  
  input[type='checkbox']:checked:after {
    font-family: 'FontAwesome';
    background-image: url("/check.svg")
    background-size: contain;
    font-size: 1rem;
    font-weight: 500;
    position: absolute;
    top: 3px;
    left: 75px;
  }
  `


const DeleteButton = styled.button `
  position: absolute;
  top: 6px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  color: var(--darkblgr);
  transform: rotate(45deg);
  
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

 

  

  return (
    <ListContainer>
        
        {todoList.map((todoItem, itemIndex) => (
            <TodoItem key={todoItem.id} >
        {/* <h2>{todoItem.listitem}</h2> */}
        <label>
                    <input 
                    type="checkbox"
                    name="completed" 
                    checked={todoItem.isDone} 
                    onChange={() => onItemToggle(todoItem.id)}
                    />
              </label>
              <h3>&nbsp;{todoItem.listitem}</h3>
      
                <DeleteButton onClick={() =>onItemDelete(itemIndex)}>
               +
                </DeleteButton>
            </TodoItem>
            
              
            
        ))
        
    }
    
    </ListContainer>
    
  )
}

export default TodoList