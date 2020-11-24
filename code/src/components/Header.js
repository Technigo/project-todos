import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  color: white;
`
const Emoji = styled.span.attrs(({ ariaLabel }) => ({
  role: 'img',
  'aria-label': ariaLabel,
})) `
  font-size: 40px;
`

export const Header = () => {
  return (
    <Title className='title'>My ToDo List<Emoji ariaLabel = 'pen'> ✏️</Emoji></Title>
    )
};