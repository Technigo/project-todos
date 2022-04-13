import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

const HeaderWrapper = styled.div`
  background-color: rgb(50, 78, 168);
  color: white;
  margin: 0px;
  padding: 10px;
  height: 200px;
  border-radius: 0px 0px 10px 10px;
`;

const ButtonWrapper = styled.div`
  color: white;
  margin: 0px;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
`;

const Header = ({
  completed,
  uncompleted,
  all,
  setUncompleted,
  setCompleted,
  setAll,
}) => {
  const showCompleted = () => {
    setCompleted(true);
    setUncompleted(false);
    setAll(false);
  };
  const showUncompleted = () => {
    setCompleted(false);
    setUncompleted(true);
    setAll(false);
  };
  const showAll = () => {
    setCompleted(false);
    setUncompleted(false);
    setAll(true);
  };

  const date = moment().format('MMMM Do');
  const weekday = moment().format('dddd');

  return (
    <HeaderWrapper>
      <h2>My Todo list</h2>
      <p>{date}</p>
      <p>{weekday}</p>
      <ButtonWrapper>
        <button active={all} onClick={showAll}>
          All
        </button>
        <button active={completed} onClick={showCompleted}>
          Completed
        </button>
        <button active={uncompleted} onClick={showUncompleted}>
          Uncompleted
        </button>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
