import React from 'react';
import styled from 'styled-components/macro';

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Your ToDo List</h1>
    </HeaderWrapper>
  );
};

export default Header

export const HeaderWrapper = styled.header`
  height: 20vh;
  width: 100%;
  min-height: 150px;
  padding-top: 3rem;
  background-color: #0534F2;
  text-align: center;
  font-size: 0.8rem;

/* TABLET */
@media (min-width: 668px) and (max-width: 1024px) {
  padding-top: 2rem;
  height: 20vh;
  font-size: 1.4rem;
} 

/* DESKTOP */
@media (min-width: 1025px) {
  height: 20vh;
  padding-top: 1rem;
  text-align: center;
  font-size: 2.2rem;
  color: whitesmoke;
} 
`;