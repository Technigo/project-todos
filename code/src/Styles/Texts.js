import styled from 'styled-components'

export const Heading = styled.h1`
text-align: center;
`

export const SubHeading = styled.h2`
font-size: 20px;
text-align: center;
`

export const Text = styled.p`
grid-column: span 2;
margin: 0;
${({stroke}) => stroke && `
text-decoration: line-through;
font-style: italic; `}
`

export const Span = styled.span`
font-size: 10px;
display: flex;
`