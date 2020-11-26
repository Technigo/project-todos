import styled from 'styled-components';

export const RemoveButton = styled.button`
  margin: 6px;
  width: 32px;
  height: 32px;
  background: ${(props) => props.background || '#bbbfca'};
  color: #495464;
  font-size: 18px;
  border: none;
  border-radius: 50%;
  &:hover {
    background: #ec5858;
    color: white;
    cursor: pointer;
  }
`;
