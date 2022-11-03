import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import toDoItems from 'reducers/toDoItems';

const ToDoList = () => {
  const toDoList = useSelector((store) => store.todo.items);

  const dispatch = useDispatch();

  const IsDoneToggle = (id) => {
    dispatch(toDoItems.actions.toggleItem(id))
  }

  const onDeleteItem = (toDoIndex) => {
    dispatch(toDoItems.actions.deleteItem(toDoIndex));
  }

  return (
    <section>
      {toDoList.map((singleToDo, index) => {
        return (
          <StyledArticle>
            <input
              id="todo-check"
              type="checkbox"
              checked={singleToDo.isDone}
              onChange={() => IsDoneToggle(singleToDo.id)} />
            <h2>{singleToDo.name}</h2>
            <button onClick={() => onDeleteItem(index)} type="button">X</button>
          </StyledArticle>
        )
      })}
    </section>
  )
}

export default ToDoList;

export const StyledArticle = styled.div`
    display: flex;
    flex-direction: row;
`;