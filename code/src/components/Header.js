import React from 'react';
import styled from 'styled-components/macro';

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <h1>ToDo - Keep Track</h1>
        <p>Your personal ToDo-list</p>
      </div>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: blue;
    width: 100%;

    h1 {
        font-size: 50px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: white;
    }

    p {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: white;
        font-weight: 200;
        font-size: 15px;
    }
`