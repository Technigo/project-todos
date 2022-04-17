import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from 'reducers/todos';

const TaskSection = styled.section`
  /* position: relative; */
`;

const TaskContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: start;
  margin: 5px;
  padding: 0 15px 0 15px;

  label .listBtn {
    position: absolute;
    border-radius: 50%;
  }

  p {
    color: #313e40;
    font-weight: bold;
    grid-column: span 3;
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  color: #5c6f73;
  border-radius: 20px;
  border: 2px solid #5c6f73;
  padding: 10px;
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
    <TaskSection>
      {todoItem.map((item, index) => (
        <TaskContainer key={item.id}>
          <label className="listBtn">
            <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleItem(item.id)}
            />
          </label>
          <p>{item.text}</p>
          <DeleteButton onClick={() => onToDoDelete(index)}>
            <span role="img" aria-label="delete">
              Delete
            </span>
          </DeleteButton>
        </TaskContainer>
      ))}
    </TaskSection>
  );
};

export default ToDoList;
