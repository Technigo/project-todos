import React from 'react'
import styled from 'styled-components'
import Counter from './Counter'

export const Header = () => {
  return (
    <HeaderBackground>
      <HeaderTitle>Get it / {'>'} </HeaderTitle>
      <Counter />
    </HeaderBackground>
  )
}

const HeaderBackground = styled.header`
    width: 100%;
    text-align: center;
    position: relative;
    height: 40vh;
    background-color: #F090D9;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
const HeaderTitle = styled.h1`
    font-weight: 700;
    font-family: 'Roboto';
    text-transform: uppercase;
    margin: 10%;
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New
    sans-serif;
    font-size: 45px;
  `