import styled from 'styled-components';

export const NewTodoInput = styled.input`
  padding: 10px 20px 10px 5px;
  border: none;
  border-bottom: 1px solid #000;
  margin: 5px 0 20px 0;
  background: #fff;
`;

export const NewTodoInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & label {
    font-size: 14px;
  }

  & select {
    padding: 2px;
    margin-left: 5px;
    background: none;
  }
`;

export const NewTodoButton = styled.button`
  background: none;
  border-radius: 25px;
  padding: 5px;
  height: 30px;
  width: 30px;
  border: none;
  border: 1px solid #000;

  &:hover {
    cursor: pointer;
  }
`;
