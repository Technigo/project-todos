import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 320px;
    margin: auto;
    padding: 30px 0;
    background-color: #DC4C3F;
    color: #fff;
`

const StyledH1 = styled.h1`
    font-size: 22px;
    margin: 0 0 0 10px;
`

const StyledStartP = styled.p`
    grid-column: 1/2;
    grid-row: 2/3;
    margin: 0 0 0 10px;
    line-height: 20px;
`

const StyledEndP = styled.p`
    grid-column: 2/3;
    text-align: end;
    margin: 0 10px 0 0;
    line-height: 20px;
    align-self: center;
`

const Header = () => {
    const completeCount = useSelector(
        (state) => state.todos.items.filter((item) => item.isComplete).length
    );
    const incompleteCount = useSelector(
        (state) => state.todos.items.filter((item) => !item.isComplete).length
    );

    return (
        <StyledHeader>
                <StyledH1>My To-Dos</StyledH1>
                <StyledStartP>{moment().format("Do MMM YYYY")}</StyledStartP>
                <StyledEndP>To do: {incompleteCount}</StyledEndP>
                <StyledEndP>Done: {completeCount}</StyledEndP>
        </StyledHeader>
    );
};

export default Header;
