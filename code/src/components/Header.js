import React from 'react';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logoName">
        {/* <img src={imagepath} alt="logo" /> */}
        <h1>Tasks</h1>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
    position: relative;
    padding: 20px;
    background-color:var(--dark-blue);
    border:solid greenyellow;
    

    .logoName {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    h1 {
        color: #EDE4E0;
        font-size: 2rem;
        @media (min-width: 321px) {
            font-size: 2.5rem;
        }
    }
    
`