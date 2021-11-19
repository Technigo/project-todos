import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { useSelector } from 'react-redux'

import TasksCompleted from 'components/TasksCompleted'

const TitleContainer = styled.div`
  margin: 30px auto 0 auto;
  text-align: center;
  background: white;    
  `
const Title = styled.h1`
  font-family: 'Bodoni Moda', serif;
  font-size: 40px;
  text-align: center;
  margin: 10px auto;`

const Date = styled.h2`
  font-size: 12px;  
  font-weight: bold;
  margin: 0;
  color:black;
`
const TaskDateContainer = styled.section`
    display: flex;
    flex-direction: column;
    text-align: right;
    margin: 10px 10px 0 0;
    font-weight: bold;

`

const DateTasks = () => {
  
    return (
        <>
            <TaskDateContainer>
                <Date>{moment().format('ll')}</Date>
                <TasksCompleted />   
            </TaskDateContainer>
            
            <TitleContainer>
                <Title> Your To-dos</Title>
            </TitleContainer>
        </>
    )
}
export default DateTasks