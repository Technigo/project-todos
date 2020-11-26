import styled from 'styled-components'

export const AddButton = styled.button`
  background: black;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const DeleteButton = styled.button`
  background: black;
  color: white;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  border-radius: 3px;
`
export const DeleteAllButton = styled(DeleteButton)`
  margin-left: 20px;
`