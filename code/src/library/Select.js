// This is for a dropdown in the AddTodoForm to be able to choose from 
// different categories.
//And also for the Fliter by category dropdown
import styled from 'styled-components'

export const Select = styled.select`
  height: 40px;
  background: pink;
  color: #606060;
  padding-left: 5px;
  font-size: 16px;
  border: none;
  margin-left: 8px;

  option {
    color: #000;
    background: #fff;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0 2px 1px;
  }
`;