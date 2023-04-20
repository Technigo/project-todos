import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #DA723C;
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    text-shadow: 1px 2px 2px #FDF1D6;
  }
  span {
    background-color: #FDF1D6;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    color: #9E7540;
    
  }
`
const Image = styled.img`
  display: flex;
  width: 100vw;
  height: 500px;
  object-fit: cover;

`
const Header = () => {
  const amountTasks = useSelector((store) => store.tasks.items.length)
  return (
    <HeaderWrapper>
      <Image src="./todologo.webp" alt="todoimg" />
      <h1>
        My TO DO LIST <span>{amountTasks}</span>
      </h1>
    </HeaderWrapper>
  )
}
export default Header;