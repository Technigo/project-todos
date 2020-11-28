import styled from 'styled-components'

export const DeleteButton = styled.button`
  background: black;
  color: white;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`
export const DeleteAllButton = styled(DeleteButton)`
  margin-left: 20px;
`
export const AddButton = styled(DeleteButton)`
  width: 30px;
  height: 30px;
  font-size: 30px;
  margin-left: 20px;
`