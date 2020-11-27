import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #F4F4F4;
  border-bottom: 2px solid #F0F0F0;
  height: 22vh;
`

export const Date = styled.p`
  width: 100%;
  margin-bottom: 0;
  margin-left: 20px;
  font-size: 2vh;
`

export const Logo = styled.h1`
  width: 40%;
  font-size: 6vh;
  margin: 10px 10px 10px 20px;
`

export const SummaryContainer = styled.div`
  width: 40%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`

export const SummaryItem = styled.p`
  font-size: 2vh;
  margin: 2px;
`
