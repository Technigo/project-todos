import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    z-index: 2;
    position: relative;

    @media (min-width: 668px) {
    padding-top: 2rem;
    padding-bottom: 1rem;

  }

    `

export const HeaderTitle = styled.h1`
    font-size: 3rem;
    text-align: center;
    font-family: 'Bungee Shade', cursive;
    color: #0f333a;
    
    
    @media (min-width: 668px) {
    font-size: 4.5rem;
  }

`