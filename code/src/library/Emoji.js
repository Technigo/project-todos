import styled from "styled-components"


export const Emoji = styled.span.attrs(({ariaLabel}) =>({
    role: "img",
    "aria-label": ariaLabel,
}))`
    font-size: 50px;
`



