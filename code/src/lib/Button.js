import styled from 'styled-components';

export const Button = styled.button `
  width: 100%;
  border: 1px solid #3d5f6b;
  border-radius: 10px;
  background: transparent;
  padding: 10px;
  font-family: 'Architects Daughter', cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
    &:first-child {
      margin-right: 10px;
    }
   &:hover {
    background-color: #3d5f6b; 
   }
`;