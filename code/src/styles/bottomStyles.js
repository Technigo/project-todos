import styled from 'styled-components';

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #F4F4F4;
  padding: 4vh;
  position: absolute;
  bottom: 0;
  height: 14vh
`

export const BottomButton = styled.button`
  background-color: #28065b;
  color: white;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  border: none;
  border-radius: 1vh;
  padding: 1vh;
  width: 13vh;

  &:disabled {
    background-color: #ddd6e8;
    border: 1px solid #28065b;
  }
`