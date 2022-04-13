import React from "react";
import { Link } from "react-router-dom";
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

const HeaderButton = styled.button`
    border: none;
    background-color: #723c70;
    color: white;
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
`
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`




const Header = () => {
    return(
        <HeaderWrapper>
            <Title>WHAT TO DO?</Title>
        </HeaderWrapper>
    )
}

export default Header