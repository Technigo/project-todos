import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => props.color || 'black'};
  font-size: 24px;
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.color || 'black'};
  font-size: 20px;
`;

export const Paragraf = styled.p`
  color: ${(props) => props.color || 'black'};
  font-size: 18px;
`;

export const Span = styled.span`
  color: ${(props) => props.color || 'black'};
  font-size: 16px;
`;
