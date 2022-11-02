import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <><HeaderTitle>To Do List</HeaderTitle>
      <Separator>
        <div className="line" />
        <p>Daily Planner</p>
        <div className="line" />
      </Separator>
    </>
  )
}

export default Header

const HeaderTitle = styled.h1`
color: #f6ede8;
font-size: 80px;
margin: 30px auto;
text-align: center;
`

const Separator = styled.div`
width: 50%;
  display:flex;
  align-items: center;
  /* border: 1px solid rebeccapurple; */

  p{
    padding: 0 15px;
    color: #fdfbf8;
  }

  .line{
    height: 1px;
    flex: 1;
    background-color: #fdfbf8;
  }

`