import styled from 'styled-components'

export const AddButton = styled.button`
  background: black;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 30px;
  margin-left: 20px;
`
export const DeleteButton = styled.button`
  background: black;
  color: white;
  width: 20px;
  height: 20px;
  display: flex;
  place-content: center;
  border-radius: 3px;
`
export const DeleteAllButton = styled(DeleteButton)`
  width: 35px;
  height: 35px;
  font-size: 20px;
  align-items: center;
  margin-left: 20px;
`