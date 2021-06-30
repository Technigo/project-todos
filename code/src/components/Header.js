import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

const HeaderWrapper = styled.header`
  height: 60px;
  border-radius: 10px;
  padding:10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column; 
 ` 

const Title = styled.text`
  font-size: 25px;
  padding-top: 24px;
  letter-spacing: 0.5px; 
` 


const Date = styled.text`
  font-size:16px;
  opacity:.5;
  font-weight:400;
  margin-top:5px;
`


const Header = () => {
 
  return (
    <HeaderWrapper>
      <Title>Today's tasks</Title>
      <Date>{dayjs().format('dddd D MMM YYYY')}</Date>
    </HeaderWrapper>
  );
};

export default Header;