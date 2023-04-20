import React from 'react';
import styled from 'styled-components';
import checkFileWhite from 'assets/check-file-white.svg'

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logoName">
        <img src={checkFileWhite} alt="logo" />
        <h1>TaskPro</h1>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
    position: relative;
    padding: 20px;
    justify-content: center;
    background-color:var(--dark-blue);
    /* border:solid greenyellow; */
    

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
    
`