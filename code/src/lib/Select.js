import styled from 'styled-components'

export const Select = styled.select`
  height: 35px;
  margin-left: 10px;
  padding-left: 5px;
  background: pink;
  font-size: 14px;
  color: #4d4d4d;
  border: none;

  option {
    min-height: 20px;
    padding: 0 2px 1px;
    color: black;
    background: green;
    display: flex;
    white-space: pre;
  }
`