import React from 'react'
import styled from 'styled-components'
import { WaveAnimation } from './WaveAnimation';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
`
export const HeaderText = styled.h2`
  font-family: "Raleway", sans-serif;
  white-space: nowrap;
  color: white;
  letter-spacing: 3px;
  text-align: center;
  font-weight: 900;
  margin: 0;
  padding-top: 10px;
  font-size: 50px;
  text-align: center;
`

export const Header = () => {
  return (
    <>
      <WaveAnimation />
      <HeaderWrapper>
        <HeaderText>TODO TODO TODO TODO TODO TODOTODO TODO TODO</HeaderText>
      </HeaderWrapper>
    </>
  );
}