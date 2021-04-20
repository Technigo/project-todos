import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
`;

const TodoHeader = styled.h1`
  margin: 0 auto;
`;

export const Header = () => {
  return (
    <Container>
      <TodoHeader>
        TODO
      </TodoHeader>
    </Container>
  )
}
