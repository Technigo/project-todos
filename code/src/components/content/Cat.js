import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

// This is a component to display a different cat
// Cats come from Redux store and are selected based on an action or condition

const Cat = () => {
  const currentCat = useSelector((store) => store.cat.catOfTheHour);

  return <CatStyle src={currentCat} alt="cat at peace" />;
};

export default Cat;

const CatStyle = styled.img`
  width: 64px;
  height: 64px;
`;
