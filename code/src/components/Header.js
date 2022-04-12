import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
    background-color: #723c70;
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
            <h1>THIS IS MY HEADER</h1>
            <ButtonWrapper>
                <Link to="/">
                    <HeaderButton>All tasks</HeaderButton>
                </Link>

                <Link to="/completed">
                    <HeaderButton>Completed tasks</HeaderButton>
                </Link>

                <Link to="/incomplete">
                    <HeaderButton>Incomplete tasks</HeaderButton>
                </Link>
            </ButtonWrapper>
        </HeaderWrapper>
    )
}

export default Header