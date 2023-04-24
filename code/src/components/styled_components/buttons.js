import styled from 'styled-components';

export const Addbutton = styled.button`
  color: #ffab73;
  border: #ffab73 2px solid;
  background: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 1rem;
  text-align: center;
  
  &:hover {
  cursor: pointer;
  box-shadow: 1px 2px #665d47;
  transform: scale(1.1);
  }
  &:disabled{
  color: #b6cdbd;
  border: #b6cdbd 2px solid;
  }
`

export const DeleteTaskButton = styled.button`
  font-size: 1.3rem;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: none;
  color: #ffab73;
  background: none;
  @media (min-width: 1024px) {
  background: #ffab73;
  color: #ddeedf;
  &:hover {
  cursor: pointer;
  box-shadow: 1px 2px #665d47;
  transform: scale(1.1);
  background: #ddeedf;
  color: #5c715e;
  }
}
`
export const DeleteAllButton = styled.button`
  border-radius: 5px;
  width: 75px;
  height: 25px;
  border: none;
  background: #ddeedf;
  color: #5c715e;
  border: 2px solid #5c715e;
  
  &:hover {
  cursor: pointer;
  box-shadow: 1px 2px #665d47;
  transform: scale(1.1);
  background: #5c715e;
  color: #ddeedf;
  }
`