import React from 'react';
import styled from 'styled-components';
import checkFileWhite from 'assets/check-file-white.svg'

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logoName">
        <img src={checkFileWhite} alt="logo" />
        <h1>Taskify <sup>&copy;</sup></h1>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
    padding: 20px;
    background-color:var(--dark-blue);
    

    .logoName {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    h1 {
        color: var(--white);
        font-size: 2rem;
        @media (min-width: 321px) {
            font-size: 2.5rem;
        }
    }

    img{
      width: 50px;
      margin-right:20px;
    }

    sup {
      font-size: 1.3rem;
      font-weight: lighter;
    }
    
`