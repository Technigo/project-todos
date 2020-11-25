import styled from 'styled-components';

export const TaskText = styled.p`
  font-size: 14px;
  text-decoration: ${(props) => props.line || 'none'};
  text-transform: none;
`;

export const Button = styled.button`
  background: none;
  border: 1px solid #869D7A;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;

  &:hover {
    border: 1px solid #000;
  }
`;

export const Emoji = styled.span`
  font-size: 28px;
  color: #6e6e6e;
  padding-right: 3px;

  &:hover {
    color: #000;
  }
`;

export const SmallText = styled.p`
  font-size: 10px;
  color: #8f8f8f;
`;