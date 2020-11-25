import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  color: white;
  padding-top: 30px;
`
const Emoji = styled.span.attrs(({ ariaLabel }) => ({
  role: 'img',
  'aria-label': ariaLabel,
})) `
  font-size: 40px;
`

export const Header = () => {
  return (
    <Title className='title'> My ToDo List<Emoji role='img' ariaLabel='pen'> ✏️</Emoji></Title>
    )
};

