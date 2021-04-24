import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { DateTime } from 'luxon'

const HeaderWrapper = styled.header`
  position: relative;

  @media (min-width: 767px){
    height: 520px;
  }
  @media (min-width: 1024px){
    height: 450px;
  }
`
const BackgroundImg = styled.img`
  width: 100%;
  object-fit: cover;

  @media (min-width: 767px){
    height: 100%;
  }
`
const HeaderContentWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25px 22px;

  @media (min-width: 767px){
    padding: 30px 55px;
  }
  @media (min-width: 1024px){
    padding: 40px 55px;
  }
  @media (min-width: 1200px){
    padding: 50px 70px;
  }
`
const Heading = styled.h1`
  font-weight: 800;
  font-style: italic;
  font-size: 58px;
  margin-bottom: 12px;

  @media (min-width: 767px){
    font-size: 120px;
    margin-right: 0;
  }
`
const Day = styled.p`
  font-weight: 200;
  font-size: 28px;
  margin: 0;

  @media (min-width: 767px){
    font-size: 40px;
    margin: 15px 0 0;
  }
`
const Date = styled.p`
  font-weight: 200;
  font-size: 18px; 
  margin-top: 7px;

  @media (min-width: 767px){
    font-size: 30px;
    margin: 20px 0 0;
  }
`
const Tasks = styled.p`
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  bottom: 25px;
  right: 22px;
  margin: 0;

  @media (min-width: 767px){
    font-size: 24px;
    bottom: 30px;
    right: 55px;
  }
  @media (min-width: 1024px){
    position: static;
  }
`
const Yellow = styled.div`
  display: none;

  @media (min-width: 1024px){
    display: inline;
    background-color: yellow;
    width: fit-content;
    padding: 5px 7px;
    margin-top: 27px;
  }
`

const Header = () => {

  const items = useSelector(store => store.todos.tasks)

  const activeTasks = items.filter(todo => !todo.isComplete).length

  const today = DateTime.now()

  return (
    <HeaderWrapper>
      <BackgroundImg src='/assets/background.jpg' alt='desk with coffee cup' />
      <HeaderContentWrapper>
        <Heading>My day</Heading>
        <Day>{today.setLocale('en-GB').toLocaleString({ weekday: 'long' })}</Day>
        <Date>{today.setLocale('en-GB').toLocaleString({ month: 'long', day: 'numeric' })}</Date>
        <Yellow>
          <Tasks>{activeTasks} tasks</Tasks>
        </Yellow>
      </HeaderContentWrapper>
    </HeaderWrapper>
  )
}

export default Header
