import styled from 'styled-components'

export const Button = styled.button`
  padding: 12px;
  margin-left: 16px;
  background: ${(props) => props.background || 'white'};
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer; 
  height: 38px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
   } `