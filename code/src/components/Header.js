import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components'
import { GiLotusFlower } from 'react-icons/gi'

export const Header = () => {
  return (
    <div>
      <TitleWrapper>
        <GiLotusFlower />
        <Title> To Do List</Title>
        <GiLotusFlower />
      </TitleWrapper>
      <StyledMoment format="dddd, Do MMMM YYYY" />
    </div>
  )
};

const TitleWrapper = styled.section`
  font-size: 4rem;
  display:flex;
  flex-direction: row;
  margin-top: 2rem;
  gap:2rem;
`;
const Title = styled.h1`
  text-align: center;
  font-family: 'Dongle', sans-serif;
  font-size: 4rem;
  margin-top: 1.5rem;
  margin-bottom:0;
  line-height: 2rem;
`;

const StyledMoment = styled(Moment)`
  font-family: 'Dongle', sans-serif;
  font-size: 3rem;
  margin-top: 0;
  color: black;
  display: flex;
  justify-content: center;
`;
