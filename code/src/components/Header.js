import React from 'react';
import styled from 'styled-components/macro'

const Header = () => {
    return (
        <TextWrapper>
            <Title> Elaine's To Do's</Title>
        </TextWrapper>
    )
};

export default Header;

const TextWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    margin-top: 3rem;
    color: white;
    font-size: 30px;
    @media (min-width: 768px) {
        font-size: 40px;
    }
`