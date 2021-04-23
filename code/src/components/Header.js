import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import styled from 'styled-components'

const Header = () => {
  const date = moment().format('MMM Do'); 

  const tasks = useSelector((store) => store.todos.tasks)

  let undoneTasks = tasks.filter((task) => !task.isComplete)
  undoneTasks = undoneTasks.length

  return (
    <HeaderContainer>
      <Title>
        Vacay Planner!
      </Title>
      <InfoContainer>
        <Info>
          {date}
        </Info>
        <Info>
          {undoneTasks} to-do's
        </Info> 
      </InfoContainer>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width: 80%;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
background-color: #1B2021;
margin: auto;
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
`
const Title = styled.h1`
font-family: 'Montserrat Alternates', sans-serif;
font-size: 28px;
font-weight: 400;
color: white;
padding: 35px 5px;
  @media (min-width: 768px) {
    font-size: 45px;
    padding: 45px 10px;
  }
  @media (min-width: 1024px) {
    padding: 20px 5px;
  }
`
const InfoContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

width: 100%;
height: 40px;
background-color: #5f939a;
  @media (min-width: 768px) {
    height: 50px;
  }
  @media (min-width: 1024px) {
    height: 60px;
  }
`
const Info = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 16px;
font-weight: 300;
color: white;
padding: 5px 10px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
    padding: 10px 15px;
  }
`