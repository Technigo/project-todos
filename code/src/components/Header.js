import React from 'react'
import styled from 'styled-components'
import Counter from './Counter'
import { Section } from './styling/Wrappers'

export const Header = () => {
  return (
    <Section>
      <HeaderBackground>
        <HeaderTitle>Get it / {'>'} </HeaderTitle>
        <Counter />
      </HeaderBackground>
    </Section>
  )
}

const HeaderBackground = styled.header`
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    height: 40vh;
    background-color: #F090D9;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  `
const HeaderTitle = styled.h1`
    font-weight: 700;
    text-transform: uppercase;
    margin: 10%;
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New
    sans-serif;
    font-size: 45px;
    @media (max-width: 668px){
      font-size: 35px;
    }
  `