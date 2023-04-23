import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vh;
  padding: 1rem;
  font-size: 30px;
`;

export const HeaderTitle = styled.h1`
  color: white;
  &:hover {
    transition-delay: 5ms;
    text-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
  }
`;