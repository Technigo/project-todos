import styled from "styled-components"

export const Button = styled.button`
padding: 3px;
margin: 4px;
background: ${(props) => props.background || "yellow"};
font-size: 1.1rem;
border: 1px solid lightslategrey;
border-radius: 3px;
 

    &:hover {
        background:slategray;
        color: yellow;
    }
    
`
