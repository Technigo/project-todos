import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MainSections, MainText, Devices } from '../styles/mainStyles';

const TaskCounter = () => {
  const totalTasks = useSelector((state) => state.tasks.items);
  const remainingTasks = totalTasks.filter((task) => task.completed === false);

  const counter = () => {
    if (totalTasks.length === 0) {
      return (
        <IconWhenEmpty className="fa-solid fa-leaf" />
      )
    } else {
      return (
        <>
          <Text>Total: <BoldNumber>{totalTasks.length}</BoldNumber></Text>
          <Text>Things left to do: <BoldNumber>{remainingTasks.length}</BoldNumber></Text>
        </>
      )
    }
  }

  return (
    <MainSections>
      <ArticleWrapper>
        {counter()}
      </ArticleWrapper>
    </MainSections>
  )
}

export default TaskCounter;

const ArticleWrapper = styled.article`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${Devices.tablet} {
  width: 50vw;
  }
`

const Text = styled(MainText)`
  color: #5f6638;
  font-size: 1em;

  @media ${Devices.tablet} {
  text-align: left;
  }
`

const BoldNumber = styled.span`
  font-weight: bold;
`

const IconWhenEmpty = styled.i`
  transform: scale(4);
  margin: 10%;
  filter: invert(50%);
`