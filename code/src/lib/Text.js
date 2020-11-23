import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => props.color || 'black'};
  font-size: 24px;
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.color || 'black'};
  font-size: 20px;
`;

export const ParagrafText = styled.p`
  color: ${(props) => props.color || 'black'};
  font-size: 18px;
`;

export const SpanText = styled.span`
  color: ${(props) => props.color || 'black'};
  font-size: 16px;
`;
