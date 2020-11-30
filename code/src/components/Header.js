import React from 'react'
import styled from 'styled-components'

import headerImage from '../header.jpg'

export const Header = () => {

    return (
        <HeaderContainer>
        <Image src={headerImage} />
        <HeaderText>MY TO-DO'S</HeaderText>
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