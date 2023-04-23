import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
background: beige;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const HeaderText = styled.div`
font-size: 25px;
font-family: 'Quicksand', sans-serif;
height: 100px;
margin-bottom: 20px;
`
const Weather = styled.div`
font-size: 20px;
font-famiy: 'Quicksand', sans-serif;
margin-bottom: 20px;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderText>
        <h1>Back & forth...</h1>
      </HeaderText>
      <Weather>
        It's <span class="material-symbols-outlined">
rainy
</span> today.
      </Weather>
    </HeaderWrapper>
  )
}

export default Header;