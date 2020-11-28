import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => props.color || '#495464;'};
  font-size: 24px;
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.color || '#495464;'};
  font-size: 20px;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.color || '#495464;'};
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : '')};
  font-size: 18px;
`;

export const Span = styled.span`
  color: ${(props) => props.color || '#495464;'};
  font-size: 16px;
`;

export const SpanDate = styled.span`
  color: ${(props) => props.color || '#495464;'};
  font-size: 12px;
`;
