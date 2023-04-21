/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { DeleteButton } from './styled_components/buttons';
import { tasks } from '../reducers/tasks';
import Empty from './Empty'
// import { Checkbox } from './styled_components/form_elements';

const colors = ['#FBF8CC', '#FDE4CF', '#FFCFD2', '#F1C0E8', '#CFBAF0', '#A3C4F3', '#90DBF4', '#8EECF5', '#98F5E1', '#B9FBC0'];

const StyledTodoRow = styled.div`
  margin: 10px auto;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  background-color: ${(props) => colors[props.index % colors.length]};
  border-radius: 6px;
  padding: 5px 8px;
`;

const TodoList = ({ selectedTab }) => {
  const todoList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();
  console.log('selectedTab', selectedTab)

  // Here I filter based on what tab we have open
  let filteredList = todoList;

  if (selectedTab === 'done') {
    filteredList = todoList.filter((item) => item.isChecked);
  } else if (selectedTab === 'notDone') {
    filteredList = todoList.filter((item) => !item.isChecked);
  } else {
    filteredList = todoList
  }

  return (
    <>
      {filteredList.length > 0
    && (
      <div className="List">
        <ul>
          {filteredList.map((singleTodo, index) => {
            return (
              <StyledTodoRow key={singleTodo.id} index={index}>
                <label htmlFor={singleTodo.id} className="container-todo-label">
                  <span>{singleTodo.content}</span>
                  <input type="checkbox" id={singleTodo.id} className="checkbox" name="todos" value="1" onChange={() => dispatch(tasks.actions.handleCheck(singleTodo))} />
                  <span className="checkmark" />
                </label>
                <DeleteButton type="button" onClick={() => dispatch(tasks.actions.removeItem(singleTodo.id))}>Delete</DeleteButton>
              </StyledTodoRow>
            )
          })}
          <DeleteButton type="button" onClick={() => dispatch(tasks.actions.removeAll())}>Remove all tasks</DeleteButton>
        </ul>
      </div>)}
      {filteredList.length === 0 && <Empty selectedTab={selectedTab} />}
    </>
  );
}

export default TodoList;

// <input type="checkbox" id={singleTodo.id} className="checkboxInputOverride" name="todos" value="1" onChange={() => dispatch(tasks.actions.handleCheck(singleTodo))} />