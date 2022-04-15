import React from "react";
import styled from 'styled-components'
import moment from 'moment'

const devices = {
    mobile: '(min-width: 375px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)'
}

const HeaderContainer = styled.header`
padding: 15px;
margin: 20px auto;
height: 20vh;
width: 375px;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;

@media ${devices.tablet} {
    width: 768px;
}
@media ${devices.tablet} {
    width: 1024px;
}
`
const DateContainer = styled.div`
 align-self: flex-start;
 font-size: 16px;
 margin-left: 30px;
 padding-bottom: 15px;
 
 @media ${devices.tablet} {
    font-size: 20px;
}
@media ${devices.tablet} {
    font-size: 22px;
}
`

const HeaderText = styled.div`
font-size: 17px;
text-transform: uppercase;

@media ${devices.tablet} {
    font-size: 22px;
}
@media ${devices.tablet} {
    font-size: 24px;
}
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