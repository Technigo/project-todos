import styled from 'styled-components';


// Header
// TodoSummary
// Date
// TodoInput
// CustomCheckbox
// TodoList

// TodoItem, DeleteButton
export const DeleteContainer = styled.div`
  display: flex;
  font-size: 18px;
  text-align: left;
  width: 80%;
  margin: auto;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;

`
export const DeleteButton = styled.button`
  border-radius: 50%;
  color: white;
  font-size: 18px;
  padding: 0;
  width: 25px;
  height: 25px;
  border: solid grey .5px;
  color: grey;

    &:last-child {
      margin-left: auto;
    }
`;

// ClearAllButton

