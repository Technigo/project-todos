import React from 'react';
import checkFile from 'assets/check-file.svg'
import styled from 'styled-components';

const EmptyList = () => {
  return (
    <EmptyListContainer>
      <img src={checkFile} alt="checkmark on a clipboard file" />
      <h1>Tada!</h1>
    </EmptyListContainer>
  )
}

export default EmptyList;

const EmptyListContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:1rem;

img {
  width: 40%;
}
`