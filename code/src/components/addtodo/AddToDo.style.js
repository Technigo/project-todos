import styled from 'styled-components';

export const NewToDo = styled.form`
  line-height: 0.8rem;
  padding-bottom: 0.8rem;
`;

export const Input = styled.input`
  min-height: 3rem;
  min-width: 40vh;
  background: pink;
  border: none;
  padding: 8px;
  font-size: 18px;
  font-family: 'DynaPuff', cursive;
  border-bottom: 2px dashed;
  :focus {
    outline: none;
  }
`;

export const AddButton = styled.button`
  background: pink;
  border: none;
  font-family: 'DynaPuff', cursive;
  font-size: 18px;
  cursor: pointer;
`;

export const AddContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
