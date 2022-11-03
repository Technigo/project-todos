import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <><HeaderTitle>To Do List</HeaderTitle>
      <Separator>
        <div className="line" />
        <p>DAILY PLANNER</p>
        <div className="line" />
      </Separator>
    </>
  )
}

export default Header

const HeaderTitle = styled.h1`
color: #FFF8EA;
font-size: 50px;
margin: 30px auto;
text-align: center;

@media (min-width: 668px) and (max-width: 1023px){
  font-size: 80px;  
}

  @media (min-width: 1024px){
  }
`

const Separator = styled.div`
width: 70%;
  display:flex;
  align-items: center;
  /* border: 1px solid rebeccapurple; */

  p{
    padding: 0 10px;
    color: #FFF8EA;
  }

  .line{
    height: 1px;
    flex: 1;
    background-color: #FFF8EA;
  }

  @media (min-width: 668px) and (max-width: 1023px){
    width: 50%;

    p{
    padding: 0 15px;
  }
    }
  
    @media (min-width: 1024px){
      border: 3px solid rgb(0, 51, 51, 0.1);
      overflow: hidden;
    }

`

/*
@media (min-width: 668px) and (max-width: 1023px){
  }

  @media (min-width: 1024px){
  }

  */