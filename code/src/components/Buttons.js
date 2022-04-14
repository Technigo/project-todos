import styled from 'styled-components/macro'

export const AddButton = styled.button`
  border: none;
  border-radius: 50%;
  margin: 0px 20px;
  width: 40px;
  height: 40px;
  font-size: 36px;
  color: #c69b7b;
  display: flex;
  justify-content: center;
  padding: 0px;

  &:hover {
    box-shadow: 2px 2px #c69b7b;
    cursor: pointer;
  }
`
export const CheckAllButton = styled.button`
  background-color: #f6e7d8;
  border: none;
  border-radius: 10px;
  color: #c69b7b;
  font-size: 18px;
  height: 40px;
  width: 25%;

  margin: 30px 0px 10px 0px;
  &:hover {
    box-shadow: 2px 2px #c69b7b;
    cursor: pointer;
  }
`
export const DeleteButton = styled.button`
  border: none;
  border-radius: 10px;
  height: 35px;
  width: 70px;
  background-color: #f6e7d8;
  text-align: center;
  justify-content: flex-end;
  color: #c69b7b;

  &:hover {
    box-shadow: 2px 2px #c69b7b;
    cursor: pointer;
  }
`
