import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const HeaderWrapper = styled.div`
  background-color: rgb(50, 78, 168);
  color: white;
  margin: 0px;
  padding: 10px;
  height: 200px;
  border-radius: 0px 0px 10px 10px;
  @media (min-width: 1025px) {
    width: 43vw;
    margin: auto;
    margin-top: 50px;
  }
`;

const ButtonWrapper = styled.div`
  color: white;
  margin: 0px;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
`;

const OptionsBtn = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 15px;
  font-weight: bold;
  transition: transform 0.2s;
  @media (min-width: 1025px) {
    &:hover {
      transform: scale(1.15);
    }
  }
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
      <h2>What to do today?</h2>
      <p>{date}</p>
      <p>{weekday}</p>
      <ButtonWrapper>
        <OptionsBtn active={all} onClick={showAll}>
          All
        </OptionsBtn>
        <OptionsBtn active={completed} onClick={showCompleted}>
          Completed
        </OptionsBtn>
        <OptionsBtn active={uncompleted} onClick={showUncompleted}>
          Uncompleted
        </OptionsBtn>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
