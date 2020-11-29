import styled from 'styled-components'

export const Select = styled.select`
  height: 31px;
  margin: 0 6px;
  padding: 0 7px;
  background: #cce5ff;
  font-size: 12px;
  color: #2e3338;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  option {
    min-height: 20px;
    padding: 0 2px 1px;
    color: #2e3338;
    background: green;
    display: flex;
    white-space: pre;
    cursor: pointer;
  }
`