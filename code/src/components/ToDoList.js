import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from 'reducers/todos';

const TaskContainer = styled.div`
  border-style: solid;
  margin: 5px;
`;

const DeleteButton = styled.button`
  cursor: pointer;
`;

const ToDoList = () => {
  const todoItem = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleItem = (id) => {
    dispatch(todos.actions.toggleItem(id));
  };

  const onToDoDelete = (index) => {
    dispatch(todos.actions.deleteItem(index));
  };

  return (
    <section>
      {todoItem.map((item, index) => (
        <TaskContainer key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleItem(item.id)}
            />
          </label>
          <p>{item.text}</p>
          <DeleteButton onClick={() => onToDoDelete(index)}>
            <span role="img" aria-label="delete">
              Remove checked ❌
            </span>
          </DeleteButton>
        </TaskContainer>
      ))}
    </section>
  );
};

export default ToDoList;
