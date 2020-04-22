import styled from 'styled-components'

export const Button = styled.button`
  padding: 12px;
  margin: 6px;
  background: ${(props) => props.background || '#6F6FE6'};
  cursor: pointer;
  border: none;
  font-size: 14px;
  border-radius: 50px;
  color: #ffffff;
  position:relative;
  &:hover {
    transform: scale(1.1);;
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
