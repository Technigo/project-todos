import styled from 'styled-components';

export const AddButton = styled.button`
  background-color: ${(props) => (props.delete ? '#e65f4a' : '#d88699')};
  border: none;
  border-radius: 5px;
  color: white;
  padding: 2px 10px 2px 10px;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: grey;
  font-size: 1rem;
`;
