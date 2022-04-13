import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
    background-color: #723c70;
`
const Title = styled.h1`
    margin-top: 0;
    text-align: center;
    font-family: 'Abril Fatface', cursive;
    color: white;
    padding: 25px;
`


const Header = () => {
    return(
        <HeaderWrapper>
            <Title>WHAT TO DO?</Title>
        </HeaderWrapper>
    )
}

export default Header