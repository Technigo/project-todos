import styled from 'styled-components';

export const TaskText = styled.p`
  font-size: 14px;
  
  text-decoration: ${(props) => props.line || 'none'};
  text-transform: none;
`;