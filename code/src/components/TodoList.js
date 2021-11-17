import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import todos from '../reducers/todos';
import { StyledDeleteButton, CheckAllButton } from './StyledButtons';
import emptystate from '../assets/emptystate.png';

const StyledList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  &.no-items {
    background-image: url(${emptystate});
    height: 500px;
    width: 500px;
    object-fit: cover;
    background-repeat: no-repeat;
    display: block;
  }
`;

const StyledListItem = styled.div`
  display: grid;
  grid-template-columns: 7.5vw auto 45px;
  align-items: center;
  padding: 2vh 2vw;
  &:nth-child(2n + 1) {
    background-color: #f4f4f4;
  }
`;

const StyledCheckbox = styled.input`
  grid-column: 1;
`;

const StyledItemInfo = styled.div`
  grid-column: 2;
  & > p {
    font-size: 16px;
    margin: 2px auto;
  }
  & > p.checked {
    text-decoration: line-through;
  }
  & > p:nth-child(2n + 2) {
    font-size: 12px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TodoList = () => {
  const todoListItems = useSelector((store) => store.todos.todoListItems);
  const timePosted = useSelector((store) => store.todos.timePosted);

  const dispatch = useDispatch();

  const onToggleCheckbox = (id) => {
    dispatch(todos.actions.toggleCheckbox(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  const onClickCompleteAll = () => {
    dispatch(todos.actions.completeAllTasks());
  };

  return (
    <StyledList className={todoListItems.length <= 0 && 'no-items'}>
      {todoListItems.map((listItem) => (
        <StyledListItem key={listItem.id}>
          <StyledCheckbox
            type='checkbox'
            checked={listItem.isComplete}
            onChange={() => onToggleCheckbox(listItem.id)}
          />

          <StyledItemInfo>
            <p className={listItem.isComplete && 'checked'}>{listItem.text}</p>
            <p className={listItem.isComplete && 'checked'}>
              Created: {timePosted}
            </p>
          </StyledItemInfo>

          <StyledDeleteButton onClick={() => onDeleteTodo(listItem.id)}>
            &#x02212;
          </StyledDeleteButton>
        </StyledListItem>
      ))}
      <ButtonContainer>
        <CheckAllButton
          className={todoListItems.length <= 0 && 'no-items'}
          onClick={onClickCompleteAll}
        >
          Check all
        </CheckAllButton>
      </ButtonContainer>
    </StyledList>
  );
};

export default TodoList;
