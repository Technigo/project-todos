import React from "react";
import styled from 'styled-components';

const Header = () => {

    const Header = styled.header `
        padding: 6px 0 0 0;
        margin: 20px 20px 20px 20px;
    `

    const Heading = styled.h1 `
        padding: 0;
        margin: 0;
        border-bottom: 8px solid black;
    `

    return (
        <Header className="container">
            <Heading>
                TODO APP
            </Heading>
        </Header>
    );
}

export default Header;