import styled from 'styled-components';

export const TaskText = styled.p`
  font-size: 14px;
  text-decoration: ${(props) => props.line || 'none'};
  text-transform: none;
`;


export const SmallText = styled.p`
  font-size: 10px;
  /* color: #8f8f8f; */
`;

export const Emoji = styled.span`
  font-size: 28px;
  color: #6e6e6e;
  padding-right: 3px;

  &:hover {
    color: #000;
  }

  @media (max-width: 321px) {
    font-size: 24px;
  }
`;
