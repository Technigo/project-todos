import styled from 'styled-components'

export const DeleteButton = styled.button`
  background: #f39422;
  color: white;
  font-weight: bold;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  :active {
    transform: translateY(4px);
  }
`
export const DeleteAllButton = styled(DeleteButton)`
  margin-left: 20px;
`
export const AddButton = styled.button`
  font-size: 40px;
  margin-left: 7px;
  background: white;
  border: none;
  justify-content: center;
  align-items: center;
  color: ${props => (props.disabled ? 'grey' : '#010038')};
  background: #293a80;
  cursor: pointer;
  :hover {
    transform: scale(1.2, 1.2);
  }
`