import styled from 'styled-components'

export const Title = styled.h1`
color: ${(props) => props.color || 'black'};
font-size: 20px;
padding: 0px 10px;
margin: ${(props) => props.margin || '16px 0px'};
`

export const Subtitle = styled.h2`
color: ${(props) => props.color || 'black'};
font-size: 14px;
padding: 0px 10px;
margin: ${(props) => props.margin || '11px 0px'};
`