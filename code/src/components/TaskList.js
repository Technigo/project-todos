import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

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

export const TaskList = () => {
  const taskList = useSelector((list) => list.tasks.items)

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
                checked={singleTask.complete} />
            </label>
            <TaskText>{singleTask.text}</TaskText>
          </InnerWrapper>
        )
      })}
    </section>
  )
}