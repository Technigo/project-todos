import React from 'react'
import styled from 'styled-components'
import TasksCompleted from 'components/TasksCompleted'

const TitleContainer = styled.div`
  margin: 50px auto 5px auto;
  text-align: center;
  background: white;
  padding: 5px;
  `
const Title = styled.h1`
font-family: 'Bodoni Moda', serif;
  font-size: 40px;
  text-align: center;
  margin: 10px auto;`

const Date = styled.h2`
  font-size: 15px;  
  font-weight: 400;
  margin: 0;
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
                <Date> 17/11/2021</Date>
                <TasksCompleted />   
            </TaskDateContainer>
            
            <TitleContainer>
                <Title> Your To-dos</Title>
            </TitleContainer>
        </>
    )
}
export default DateTasks