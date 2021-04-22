import React from 'react'

import styled from "styled-components";



export const Header =() => {

    return (
        <HeaderContainer>
            <div className="gif-animation">
                <iframe 
                    src="https://giphy.com/embed/Gjnpx6nps0yS4" 
                    width="109" 
                    height="78" 
                    frameBorder="0" 
                    class="giphy-embed" 
                    >
                </iframe>
            </div>      
            <h1>Get Up! You got stuff to do!</h1>
            <p>{new Date().toLocaleString()}</p>
        </HeaderContainer>       
    )
}


const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top:20px;
    justify-content: space-between;
    border-bottom: grey 2px solid; 

        @media (min-width: 768px) {
            justify-content: center;
            width: 500px;
            height: 300px;
        }

        @media (min-width: 1024px) {   
    } 

`;