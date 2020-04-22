import styled from 'styled-components'

export const Title = styled.h1`
color: ${(props) => props.color || 'black'};
font-size: 20px;
padding: 0px 10px;
`

export const Subtitle = styled.h2`
color: ${(props) => props.color || 'black'};
font-size: 16px;
padding: 0px 10px;
`