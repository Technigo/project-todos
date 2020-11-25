import React from 'react'
import styled from 'styled-components'

import headerImage from '../header.jpg'

export const Header = () => {

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
    font-size: 22px;
    font-style: italic;
    position: absolute;
    top: 50;
    right: 0;
    bottom: 0;
    left: 0;
    padding-left: 10px;
    padding-bottom: 2px;
        @media (min-width: 768px) { /* TABLET VIEW */
            font-size: 45px;
            padding-left: 20px;
        }
            @media (min-width: 1024px) { /* DESKTOP VIEW */
                font-size: 60px;
                padding-left: 20px;
            }
    `


    return (
        <HeaderContainer>
        <Image src={headerImage} />
        <HeaderText>TO DO LIST</HeaderText>
        </HeaderContainer>
    )

}