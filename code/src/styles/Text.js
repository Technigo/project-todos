import styled from 'styled-components'

export const Paragraph = styled.p`
  font-family: 'Avenir-Next-Regular';
  color: ${(props) => props.color || 'black'};
`

export const Title = styled.h2`
  font-family: 'Bosk';
  color: rgb(42, 95, 166);
  background: url('./images/stroke.png') no-repeat center center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Subtitle = styled.h3`
  font-family: 'Bosk';
  color: rgb(42, 95, 166);
  background: url('./images/stroke.png') no-repeat center center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`