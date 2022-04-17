import React from "react";
import styled from 'styled-components';

const HeaderContainer = styled.header `
    padding: 6px 0 0 0;
    margin: 20px auto;
    @media (min-width: 768px) {
        margin: 0;
        }
`

const Heading = styled.h1 `
    padding: 0;
    margin: 0;
    border-bottom: 8px solid black;
    text-transform: uppercase;
    @media (min-width: 768px) {
        margin: 0 0 20px 20px;
        width: 100%;
        }
`

const Header = () => {

    return (
        <HeaderContainer className="container">
            <Heading>
                Todo app
            </Heading>
        </HeaderContainer>
    );
}

export default Header;