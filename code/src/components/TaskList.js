/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { InnerWrapper, OuterWrapper } from 'styles/GlobalStyles';
import styled from 'styled-components';

export const TaskList = () => {
  const dispatch = useDispatch();

  // Tasks to not disappear when reload page
  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('taskListSave'));
    dispatch(tasks.actions.setAllItems(listFromStorage));
  }, []);

  const todoList = useSelector((store) => store.tasks.items);

  useEffect(() => {
    localStorage.setItem('taskListSave', JSON.stringify(todoList));
  }, [todoList]);

  const handleTaskToggle = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  };

  const handleRemoveTask = (taskIndex) => {
    dispatch(tasks.actions.removeTask(taskIndex));
  };

  return (
    <OuterWrapper>
      <InnerWrapper>
        {todoList.map((singleTask, index) => {
          return (
            <TaskWrapper key={singleTask.id}>
              <Task>
                <label>
                  <input
                    type="checkbox"
                    checked={singleTask.complete}
                    onChange={() => handleTaskToggle(singleTask.id)}
                  />
                </label>
                <Paragraph>{singleTask.text} </Paragraph>
              </Task>
              <Button type="button" onClick={() => handleRemoveTask(index)}>
                🗑
              </Button>
            </TaskWrapper>
          );
        })}
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default TaskList;

const Paragraph = styled.p`
  color: red;
`;

const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  border-radius: 10px;
  margin-bottom: 5px;
`;

const Task = styled.div`
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;
