import styled from 'styled-components';

export const AddButtonWhite = styled.input`
  border: none;
  border-radius: 8px;
  height: 40px;
  width: 40px;
  background: #f4f7f7;
  font-size: 30px;
  color: #79a8a9;
  cursor: pointer; 

  &:hover {
    background: #1f4e5f;
    color: #f4f7f7;
    border: 1px solid #f4f7f7;
  }
`
export const AddButtonColor = styled.input`
  border: none;
  border-radius: 8px;
  height: 40px;
  width: 40px;
  background: #aacfd0;
  font-size: 30px;
  color: #79a8a9;
  cursor: pointer; 

  &:hover {
    background: #79a8a9;
    color: #aacfd0;
  }
`
export const DeleteButton = styled.button`
  border: none;
  border-radius: 3px;
  background: #ff4d4d;
  font-size: 10px;
  color: #ffe8d5;
  padding: 3px 6px 2px 6px;
  cursor: pointer; 

  &:hover {
    padding: 4px 6px 3px 6px;
  }
`
export const RemoveButton = styled.button`
  border: none;
  border-radius: 3px;
  background: #aacfd0;
  font-size: 10px;
  color: #79a8a9;
  cursor: pointer; 

  &:hover {
    background: #79a8a9;
    color: #aacfd0;
  }
`