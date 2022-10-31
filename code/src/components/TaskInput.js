import React from 'react';
import styled from 'styled-components/macro'

const TaskInput = () => {
  return (
    <TaskInputWrapper>
      <input
        placeholder="Write here"
        type="text"
        onChange={() => { }} />
      <AddTaskButton
        onClick={() => { }}
        type="button">+
      </AddTaskButton>
    </TaskInputWrapper>
  )
}

export default TaskInput;

const AddTaskButton = styled.button`
  background-color: blueviolet;
  cursor: pointer;
  :hover {
    background-color: grey;
  }
`

const TaskInputWrapper = styled.div`
  display: flex;
`