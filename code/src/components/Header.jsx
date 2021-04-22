import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  padding-top: 40px;
`;

const TodoHeader = styled.h1`
  margin: 0 auto;
  font-size: 30px;
  color: white;
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
