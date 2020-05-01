import styled from 'styled-components'

export const Button = styled.button`
  all: unset;
  background: rgb(39, 94, 97);
  width: 150px;
  padding: 2px;
  border-radius: 5px;
  font-family: 'Avenir-Next-Light';
  color: white;
  text-transform: lowercase;
  text-align: center;
  margin: 1rem auto 0 auto;
  cursor: pointer;

  &:hover {
    background: rgb(66, 146, 132);
  }

  &:disabled {
    background: rgb(208, 235, 233);
  }
`

export const TrashButton = styled.button`
  all: unset;
  cursor: pointer;
  color: white;
  float: right;

  &:hover svg{
    color: rgb(39, 94, 97);
  }
`