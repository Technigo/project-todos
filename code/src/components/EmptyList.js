import React from 'react';
// import award from 'assets/award.svg'
import checkFile from 'assets/check-file.svg'
import styled from 'styled-components';

const EmptyList = () => {
  return (
    <EmptyListContainer>
      <img src={checkFile} alt="award badge icon" />
      <h1>All Done!</h1>
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