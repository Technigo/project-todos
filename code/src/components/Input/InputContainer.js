import React from 'react'
import AddTask from "./AddTask"
import TaskSummary from 'components/Input/TaskSummary'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const InputContainer = () => {
  return (
    <Wrapper>
        <TaskSummary />
        <AddTask />
    </Wrapper>
  )
}

export default InputContainer