import styled from 'styled-components';

export const OuterWrapper = styled.section`
  max-width: 550px;
  margin: 0 auto;
  background-color: #EDEFF0;
  text-align: center;
  border-radius: 20px 20px 20px 20px;
  @media (max-width: 640px) {
    border-radius: 15px 15px 15px 15px;
    max-width: 350px;
  }
`
