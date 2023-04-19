import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { tasks } from './reducers/tasks';

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin: 0;
`

const TaskText = styled.p`
    font-family: 'Dongle', sans-serif;
    font-size: 2em;
`
const Time = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.7em;
`

export const TaskList = () => {
  const taskList = useSelector((list) => list.tasks.items)
  const dispatch = useDispatch()

  const checkboxToggle = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  }

  return (
    <section>
      {taskList.map((singleTask) => {
        return (
          <InnerWrapper>
            <label htmlFor={singleTask}>
              <input
                id={singleTask.id}
                type="checkbox"
                className="checkBox"
                checked={singleTask.complete}
                onChange={() => checkboxToggle(singleTask.id)} />
            </label>
            <TaskText>{singleTask.text}</TaskText>
            <Time>{singleTask.time}</Time>
          </InnerWrapper>
        )
      })}
    </section>
  )
}