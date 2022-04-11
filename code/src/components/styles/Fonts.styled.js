import styled from "styled-components";

export const Regular = styled.span`
    font-weight: 400;
    font-size: .6em;
`

export const Count= styled(Regular)`
margin-left: 65px;
`

export const ColorLine = styled.p`
    border-left: 2px solid ${(props) => (props.color)};
    padding-left: 5px;
    margin-right: 10px;
`