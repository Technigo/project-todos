import styled from 'styled-components'

export const Category = styled.select`
  height: 36px;
  padding: 10px;
  margin: 6px;
  background: gold;
  font-size: 14px;
  color: gray;
  border: none;
  border-radius: 6px; 
  
  &:hover {
    background: navy;
    color: white;
    cursor: pointer;
  }
  
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`