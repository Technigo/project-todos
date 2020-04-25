import styled from "styled-components"


export const Select = styled.select`
height: 1.4rem;
background-color: white;
color:#3d3d3d;
font-size: 1rem;
margin:0.6rem;

option { /*  why is this not working??? */
    color: black;
    background: orange;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`