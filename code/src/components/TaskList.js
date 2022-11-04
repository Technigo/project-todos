/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { Styled } from './TaskList.styled'

export const TaskList = () => {
  const taskArray = useSelector((store) => store.tasks.items);

  const outstandingTasks = taskArray.filter((item) => !item.isCompleted);

  const completedTasks = taskArray.filter((item) => item.isCompleted);

  const dispatch = useDispatch();

  const completedTaskToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  }

  const deleteTask = (id) => {
    dispatch(tasks.actions.deleteItem(id))
  }

  return (
    <Styled.ListColumns>
      <Styled.List>
        <h2>Outstanding</h2>
        {outstandingTasks.map((item) => {
          return (
            <Styled.ListItem>
              <p>{item.name}</p>
              <Styled.Clickers>
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => completedTaskToggle(item.id)} />
                <button
                  type="button"
                  onClick={() => deleteTask(item.id)}>❌
                </button>
              </Styled.Clickers>
            </Styled.ListItem>
          );
        })}
      </Styled.List>
      <Styled.List>
        <h2>Completed</h2>
        {completedTasks.map((item) => {
          return (
            <Styled.ListItem>
              <p>{item.name}</p>
              <Styled.Clickers>
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => completedTaskToggle(item.id)} />
                <button
                  type="button"
                  onClick={() => deleteTask(item.id)}>❌
                </button>
              </Styled.Clickers>
            </Styled.ListItem>
          );
        })}
      </Styled.List>
    </Styled.ListColumns>
  )
}
