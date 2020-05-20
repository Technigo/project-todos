import styled from 'styled-components';

export const InputTitle = styled.span`
  color: #f4f7f7;
  font-size: 25px;
  display: block;
  margin-bottom: 10px;
`
export const HeaderTitle = styled.h1`
  color: #1f4e5f;
  font-size: 20px;
  margin: 0px;
`
export const SpanText = styled.span`
  color: #79a8a9;
  font-size: 14px;
`
export const SpanTextBold = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.color}
`
export const SpanTextItem = styled.span`
  font-size: 14px;
  color: ${props => props.color}
`
export const Attribute = styled.a`
  color: #f4f7f7;
  text-decoration: none;
  font-size: 12px;

  &:visited {
    color: #f4f7f7;
  }
`