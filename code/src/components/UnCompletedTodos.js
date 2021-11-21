import React from 'react';
import moment from 'moment';
import styled from 'styled-components/macro';
import { FaTrash } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import todos from '../reducers/todos';

const UnCompletedTodos = () => {
  const items = useSelector((store) => store.todos.items);

  const unCompletedTodos = items.filter((item) => !item.isComplete);

  const dispatch = useDispatch();
  const date = new Date();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  // delete one todo
  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <>
      {unCompletedTodos.map((item) => (
        <UnCompletedDiv key={item.id}>
          <label htmlFor="checkbox" />
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
            id="checkbox"
          />
          <p>{item.text}</p>
          <span>{moment(date).format('ll')}</span>
          <DeleteButton onClick={() => onDeleteTodo(item.id)} />
        </UnCompletedDiv>
      ))}
    </>
  );
};

export default UnCompletedTodos;

const UnCompletedDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  border-bottom: 1px solid rgba(217, 222, 218, 0.6);
  width: 100%;

  input {
    grid-column: 1/1;
    width: 26px;
    height: 26px;
    background-color: var(--white);
    border: 8px solid var(--white);
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
    border: 1px solid var(--grey);
    cursor: pointer;
  }

  input:checked {
    background-color: var(--black);
  }

  p {
    grid-column: 2/7;
    overflow-wrap: break-word;
    font-size: 18px;
    text-transform: uppercase;
    padding: 0 5px;
  }

  span {
    grid-column: 9/11;
    opacity: 0.6;
    font-size: 12px;
  }

  @media screen and (min-width: 992px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const DeleteButton = styled(FaTrash)`
{
  grid-column: 11/12;
  justify-self: end;
  cursor: pointer;
  height: 25px;
  width: 25px;

`;
