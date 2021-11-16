import React from "react";
import moment from "moment";
import styled from "styled-components";

const TitleHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    width: 90%;
    background-color: #768eb0;
    border-radius: 25px 25px 0px 0px;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin:0;
`
const Title = styled.h1`
    font-size: 45px;
    margin: 0;
`
const TitleDate = styled.p`
    color: white;
    font-size: 16px;
    font-weight: 600;
`

const Header = () => {
    return (
        <TitleHeader>
            <TextContainer>
                <Title>ToDo</Title>
                <TitleDate>{moment().format('dddd Do MMMM')}</TitleDate>
            </TextContainer>
        </TitleHeader>
    )
}

export default Header