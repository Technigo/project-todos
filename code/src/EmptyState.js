import React from "react";
import reading from './img/reading.svg';
import styled from "styled-components";

const EmptyStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    img {
        margin-left: 2rem;
    
    }

    p {
        font-size: 1.4rem;
        text-align: center;
        color: #666;
    }
`

const EmptyState = ( { text } ) => {
    return (
        <EmptyStateContainer>
            <img src={reading} alt='Girl is sitting and reading books'/>
            <p>{text}</p>
        </EmptyStateContainer>
    )
}

export default EmptyState;