import React from "react";
import styled from 'styled-components'
import moment from 'moment'

const HeaderContainer = styled.header`
padding: 15px;
margin: 0;
height: 20vh;
width: 100vw;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
const DateContainer = styled.div`
 align-self: flex-start;
 font-size: 16px;
 margin-left: 30px;
 padding: 10px;
`

const HeaderText = styled.div`
font-size: 20px;
text-transform: uppercase;
`

const date = moment().format('MMMM Do')
const weekday = moment().format('dddd')

export const Header = () => {
    return(
        <HeaderContainer>
            <DateContainer>
            <p> {date} </p>
            <p> {weekday} </p>
            </DateContainer>
            <HeaderText>
            <h1>Remember to</h1>
            </HeaderText>
        </HeaderContainer>
    )
}