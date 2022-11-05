import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
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
    <CounterSection>
      <ArticleWrapper>
        {counter()}
      </ArticleWrapper>
    </CounterSection>
  )
}

export default TaskCounter;

const CounterSection = styled(MainSections)`
  padding: 5% 0% 0% 0%;
  margin-left: 20%;

  @media ${Devices.tablet} {
    margin-left: 20%;
  }
`

const ArticleWrapper = styled.article`
  background-color: #fffaef;
  border-radius: 8px;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1%;

  @media ${Devices.tablet} {
    width: 28vw;
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
  padding: 4% 0%
`