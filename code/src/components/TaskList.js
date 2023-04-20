import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { tasks } from './reducers/tasks';
import { Button } from './styles/global';
import { AllDone } from './AllDone';

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    margin: 0;
`

const TaskText = styled.p`
    font-family: 'Dongle', sans-serif;
    font-size: 2em;
    line-height: 0.5em;
    width: 100%;
`
const Time = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.7em;
  width: 100%;
`

export const TaskList = () => {
  const taskList = useSelector((list) => list.tasks.items)
  const dispatch = useDispatch()

  const checkboxToggle = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  }

  const deleteBtn = (taskIndex) => {
    dispatch(tasks.actions.deleteTask(taskIndex))
  }

  return (
    <section>
      {taskList.map((singleTask, index) => {
        return (
          <InnerWrapper>
            <label htmlFor={singleTask}>
              <input
                key={singleTask.id}
                id={singleTask.id}
                type="checkbox"
                className="checkBox"
                checked={singleTask.complete}
                onChange={() => checkboxToggle(singleTask.id)} />
            </label>
            <TaskText>{singleTask.text}</TaskText>
            <Time>{singleTask.time}</Time>
            <Button
              type="button"
              onClick={() => deleteBtn(index)}>
              <span className="material-symbols-outlined">
cancel
              </span>
            </Button>
          </InnerWrapper>
        )
      })}
      <AllDone />
    </section>
  )
}