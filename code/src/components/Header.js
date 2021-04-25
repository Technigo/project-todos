import React from "react";

import styled from "styled-components";



export const Header =() => {

    return (
        <HeaderContainer>
                <iframe 
                    src="https://giphy.com/embed/Gjnpx6nps0yS4" 
                    width="109" 
                    height="78" 
                    frameBorder="0" 
                    title="gif" 
                    >
                </iframe>
            <Title>Get Up! You got stuff to do!</Title>
            <DateText>{new Date().toLocaleString()}</DateText>
        </HeaderContainer>       
    )
}

const Title = styled.p`
    font-weight: 600;
    font-size: 22px;
    margin: 0;
    margin-top: 15px;

    @media (min-width: 768px) {
            font-size: 30px;
        }
`;
const DateText = styled.p`
        margin-bottom: 10px;
        @media (min-width: 768px) {
            margin-top: 20px;
        }
`; 

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 0;
    justify-content: center;
    border-bottom: #D8D8D8 2px solid; 
    width: 300px;
    height: 200px;
        @media (min-width: 768px) {
            justify-content: center;
            width: 500px;
            height: 300px;
        }
`;