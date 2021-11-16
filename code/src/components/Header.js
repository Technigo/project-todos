import React from "react";
import moment from "moment";
import styled from 'styled-components/macro'

const TitleHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    width: 90%;
    background-color: rgba(118, 142, 176, 0.5);
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
    font-family: 'Yuji Syuku', serif;
`
const TitleDate = styled.p`
    color: white;
    font-size: 20px;
    font-weight: 700;
    margin: 5px 0px 0px;
    font-family: 'Yuji Syuku', serif;
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