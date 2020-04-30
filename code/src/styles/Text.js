import styled from 'styled-components'

export const Paragraph = styled.p`
  font-family: 'Avenir-Next-Regular';
  color: ${(props) => props.color || 'black'};
`

export const Title = styled.h2`
  font-family: 'Malina1';
  color: rgb(40, 95, 98);
`

export const Subtitle = styled.h3`
  font-family: 'Malina1';
  color: rgb(40, 95, 98);
`