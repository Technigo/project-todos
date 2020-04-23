import styled from 'styled-components'

export const Button = styled.button`
  padding: 8px;
  margin-left: 36px;
  background: ${(props) => props.background || '#6F6FE6'};
  cursor: pointer;
  border: none;
  font-size: 12px;
  border-radius: 50px;
  color: #ffffff;
  position:relative;
  &:hover {
    transform: scale(1.1);;
  }
`

export const ClearButton = styled.button`
  padding: 8px;
  margin: 16px;
  background: ${(props) => props.background || '#9999ff'};
  cursor: pointer;
  border: none;
  font-size: 14px;
  border-radius: 50px;
  color: #ffffff;
  position:relative;
  &:hover {
    transform: scale(1.1);
    background: ${(props) => props.background || '#6F6FE6'};
  }
`

export const AddTodo = styled.input `
  padding: 8px;
  font-size: 45px;
  margin-left: 8px;
  border:none;
  cursor: pointer;
  background-color: transparent;
  color: rgb(132, 139, 146);
`
