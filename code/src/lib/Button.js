import styled from 'styled-components';

export const Button = styled.button `
  width: 100%;
  border: 2px solid #3d5f6b;
  border-radius: 10px;
  background: transparent;
  padding: 10px;
  font-size: 16px;
  font-family: 'Architects Daughter', cursive;
  display: flex;
  justify-content: center;
   &:hover {
    background-color: #3d5f6b; 
    border: none;
    color: #fff;
   }
`