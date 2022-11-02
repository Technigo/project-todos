import React from 'react';
import styled from 'styled-components/macro';
import angel from '../../Assets/cat/angel.png';

const Cat = () => {
  return <CatStyle src={angel} alt="cat at peace" />;
};

export default Cat;

const CatStyle = styled.img`
  padding-top: 10%;
  width: 64px;
  height: 64px;

  @media (min-width: 1024px) {
    padding-top: 50px;
  }
`;
