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
  justify-content: center;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
  width: 40%;

  &:hover {
    border: 1px solid #000;
  }

  @media (max-width: 321px) {
    width: 125px;
  }
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

export const SmallText = styled.p`
  font-size: 10px;
  color: #8f8f8f;
`;