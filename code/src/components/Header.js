import React from "react";
import styled from "styled-components";
import Date from "./Date";

const HeaderWrapper = styled.header`
    background-color: #4C4EF9;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    margin-top: 0;
    // text-align: center;
    font-family: 'Abril Fatface', cursive;
    color: white;
    padding: 25px;
`


const Header = () => {
    return(
        <HeaderWrapper>
            <Title>WHAT TO DO?</Title>
            <Date />
        </HeaderWrapper>
    )
}

export default Header