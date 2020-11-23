import styled from 'styled-components';

export const Button = styled.button `
  width: 100%;
  background-color: transparent; 
  border: none;
  display: flex;
`
export const RoundButton = styled(Button) `
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding: 15px;
  border: 1px solid papayawhip;

`