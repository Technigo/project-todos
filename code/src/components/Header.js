import React from 'react'
import styled from 'styled-components'

import headerImage from '../header.jpg'

export const Header = () => {

    /* creates today's date */
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const date = new Date();
    const mm = date.getMonth();
    const month = months[mm];
    const dd = date.getDate();
    const weekday = date.toLocaleDateString('en-US', {weekday: 'long'});

    return (
        <HeaderContainer>
            <Image src={headerImage} />
                <HeaderText>MY TO-DO'S</HeaderText>
                    <DateText>{weekday}, {month} {dd}</DateText>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.section `
display: flex;
justify-content: center;
align-items: center;
position: relative;
width: 100%;
height: auto;
`

const Image = styled.img`
width: 100%;
height: auto;
`

const HeaderText = styled.text `
color: #fff;
font-size: 20px;
font-weight: bold;
position: absolute;
top: 50;
right: 0;
bottom: 0;
left: 0;
padding-left: 10px;
padding-bottom: 2px;
`

const DateText = styled.text`
color: #fff;
font-size: 18px;
font-style: italic;
position: absolute;
top: 0;
right: 0;
margin: 5px 8px 0 0;
`