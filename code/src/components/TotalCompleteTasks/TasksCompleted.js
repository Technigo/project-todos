import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components'

const H3 = styled.h3`
  color: white;
  margin: 2rem 0rem 0rem 2rem;
  font-size: 14px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
`

const Date = styled.div`
  font-size: 14px;
  color: white;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 2rem;
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TotalCompleteItems = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const completedTasks = taskList.filter((task) => task.isDone === true);
  const dateTime = moment().format('dddd, MMM Do')

  return (
    <Wrapper className="complete-wrapper">
      <H3>Tasks done for today - {completedTasks.length}/{taskList.length}</H3>
      <Date className="date">
        <p>{dateTime}</p>
      </Date>
    </Wrapper>
  );
}

export default TotalCompleteItems;

