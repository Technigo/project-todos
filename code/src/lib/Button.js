import styled from 'styled-components'





export const Button = styled.button`
  font-size: 12px;
  border-radius: 8px;
  color: black;
  width: 80px;
  height: 20px;
  border: 0px;
  background: ${(props) => props.background || '#E6F5FF'};

  &:hover {
    background: #7487AD;
    color: black;
  }
  
`;