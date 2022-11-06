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
    <StyledSection>
      {toDoList.map((singleToDo, index) => {
        return (
          <StyledArticle>
            <input
              id="todo"
              type="checkbox"
              checked={singleToDo.isDone}
              onChange={() => IsDoneToggle(singleToDo.id)} />
            <StyledBorder>
              <StyledParagraph>{singleToDo.name}</StyledParagraph>
              <StyledButton onClick={() => onDeleteItem(index)} type="button"> <img src="images/delete.svg" alt="delete icon" /></StyledButton>
            </StyledBorder>
          </StyledArticle>
        )
      })}
    </StyledSection>
  )
}

export default ToDoList;

export const StyledSection = styled.section`
  width: 100%;
`

export const StyledArticle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const StyledBorder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-lightgray);
  width: 95%;
`

export const StyledParagraph = styled.p`
  font-size: 1.25rem;
  padding: 0.75rem 0.5rem;
  border: none;
  width: 89%;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: var(--color-white);
  padding: 2px;
  height: 20px;
`;