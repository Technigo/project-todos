import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #DA723C;
  font-family: 'Libre Franklin';
  font-style: normal;
  font-size: 1.2em;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    gap: 5em;
  }
  

`
const Progress = () => {
  const alltasks = useSelector((store) => store.tasks.items)
  return (
    <ProgressWrapper>
      <p>
       Todo: {alltasks.filter((task) => task.status === 'todo').length}
      </p>
      <p>
      Inprogress: {alltasks.filter((task) => task.status === 'in progress').length}
      </p>
      <p>
      Completed: {alltasks.filter((task) => task.status === 'completed').length}
      </p>
    </ProgressWrapper>
  )
}
export default Progress