import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  gap: 10px;
  align-items: center;
`

const TodoItem = styled.article `
  background-color: #aac3bd;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 340px;

  h3 {
    margin: 0;
  }
  
  p {
    font-size: 12px;
  }

  input[type='checkbox'] {
    appearance: none;
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
  }
  
  @media (min-width: 768px) {
    width: 420px;
  }
`

const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CreatedBox = styled.div`
  display: flex;

  p {
    margin: 0;
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
          <ItemBox>
            <label>
              <input 
                type="checkbox"
                name="completed" 
                checked={todoItem.isDone} 
                onChange={() => onItemToggle(todoItem.id)}
              />
            </label>
            <h3>&nbsp;{todoItem.listitem}</h3>
          </ItemBox>
          <CreatedBox>
            <p>Created:&nbsp;{todoItem.createdAt}</p>
          </CreatedBox>
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