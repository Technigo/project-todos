import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 20px;
    gap: 10px;
    border: none;
    border-radius: 25px 2px 25px 2px;
    -webkit-border-radius: 25px 2px 25px 2px;
    -moz-border-radius: 25px 2px 25px 2px;
    font-family: 'Caveat', cursive;
    background-color: #d8d0c1;
    box-shadow: 0 5px 8px  rgb(140,115,115,0.2), 0 3px 10px  rgb(140,115,115,0.2);

    h1 {
      font-size: 64px;
      font-family: 'Caveat', cursive;
      color: #3F4238;
      text-shadow: -4px 5px 8px rgba(0, 0, 0, 0.4);

      @media (min-width: 667px) {
        font-size: 96px;
      }
    }

    h2 {
      font-family: 'Caveat', cursive;
      font-size: 22px;
      color: black;

      @media (min-width: 667px) {
        font-size: 26px;
      }
    }

    h3 {
      font-size: 18px;
      color: black;
    }
    
    @media (min-width: 667px) {
      margin-top: 0;
    }
`;

const formatDate = () => {
  const currentDate = new Date();
  return format(currentDate, 'EEE MMMM do');
};

export const Header = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const completedTasks = taskList.filter((task) => task.isDone);

  const dateString = formatDate();

  return (
    <StyledHeader>
      <h1>ToDo&apos;s</h1>
      <h2>{dateString}</h2>
      <h3>{completedTasks.length} / {taskList.length} tasks are done</h3>
    </StyledHeader>
  );
}