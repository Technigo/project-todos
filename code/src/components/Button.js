import styled from 'styled-components';

export const DefaultButton = styled.button`
background-color: red;
border-radius: 8px 8px;
font-size: 25px;
&:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.1);
  }
`;