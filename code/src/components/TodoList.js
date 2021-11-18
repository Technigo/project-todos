import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import todos from '../reducers/todos';
import { StyledDeleteButton, CheckAllButton } from './StyledButtons';
import emptystate from '../assets/emptystate.png';

const StyledList = styled.section`
  &.display-items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px auto;
    height: 400px;
    overflow-y: scroll;
  }
  &.no-items {
    background-image: url(${emptystate});
    height: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .list-item {
    display: grid;
    grid-template-columns: 7.5vw auto 45px;
    align-items: center;
    padding: 2vh 2vw;
  }
  .list-item:nth-child(2n + 1) {
    background-color: #f4f4f4;
  }

  .checkbox {
    grid-column: 1;
  }

  .list-item-info {
    grid-column: 2;
  }

  .list-item-info > p {
    font-size: 16px;
    margin: 2px auto;
  }

  .list-item-info > p.checked {
    text-decoration: line-through;
  }

  .list-item-info > p:nth-child(2n + 2) {
    font-size: 12px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TodoList = () => {
  const todoListItems = useSelector((store) => store.todos.todoListItems);

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
    <>
      <StyledList
        className={todoListItems.length <= 0 ? 'no-items' : 'display-items'}
      >
        {todoListItems.map((listItem) => (
          <div className='list-item' key={listItem.id}>
            <input
              className='checkbox'
              type='checkbox'
              checked={listItem.isComplete}
              onChange={() => onToggleCheckbox(listItem.id)}
            />

            <div className='list-item-info'>
              <p className={listItem.isComplete && 'checked'}>
                {listItem.text}
              </p>
              <p className={listItem.isComplete && 'checked'}>
                Created: {listItem.timePosted}
              </p>
            </div>

            <StyledDeleteButton onClick={() => onDeleteTodo(listItem.id)}>
              <span>&#x02212;</span>
            </StyledDeleteButton>
          </div>
        ))}
      </StyledList>
      <ButtonContainer>
        <CheckAllButton
          className={todoListItems.length <= 0 && 'no-items'}
          onClick={onClickCompleteAll}
        >
          <span>Check all</span>
        </CheckAllButton>
      </ButtonContainer>
    </>
  );
};

export default TodoList;
