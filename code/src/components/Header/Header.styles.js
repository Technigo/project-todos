/* eslint-disable linebreak-style */
import styled from 'styled-components/macro'

export const HeaderStyled = styled.header`
    position: relative;
    margin: 10px;
    padding-bottom: 20px;
    border-bottom: 0.5px solid #EDE4E0;

    .logoName {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    h1 {
        font-family: 'Kalam',cursive;
        color: #EDE4E0;
        font-size: 2rem;

        @media (min-width: 321px) {
            font-size: 2.5rem;
        }
    }

    
`