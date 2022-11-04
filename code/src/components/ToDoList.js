import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import todos from 'reducers/todos';

const ToDoList = () => {
  const toDoList = useSelector((store) => store.todo.items);

  const dispatch = useDispatch();

  const IsDoneToggle = (id) => {
    dispatch(todos.actions.toggleItem(id))
  }

  const onDeleteItem = (toDoIndex) => {
    dispatch(todos.actions.deleteItem(toDoIndex));
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
            <p>{singleToDo.name}</p>
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