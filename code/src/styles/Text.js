import styled from 'styled-components'

export const Paragraph = styled.p`
  font-family: 'Avenir-Next-Regular';
  color: ${(props) => props.color || 'darkgray'};
  text-transform: lowercase;
`

export const Title = styled.h2`
  font-family: 'Malina1';
  color: rgb(40, 95, 98);
  font-size: 30px;
  margin: -30px 0 -10px 0;
`

export const Subtitle = styled.h3`
  font-family: 'Malina1';
  color: rgb(40, 95, 98);
  font-size: 24px;
`