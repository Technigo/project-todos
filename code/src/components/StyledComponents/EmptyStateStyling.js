import styled from 'styled-components';

export const EmptyStateImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 30px 60px 0px 60px;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  };
`;

export const EmptyStateText = styled.div`
  display:flex;
  justify-content:center;
  padding:20px;
  font-size:35px;
  font-family:"Didot", sans-serif;
  font-weight:700;
  color: #be648c;
`