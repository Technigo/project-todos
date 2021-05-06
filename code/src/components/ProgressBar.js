import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Container =styled.div`
  background-color: #f5cebe;
  padding: 10px;
  display: flex;
  align-items: center;
`

const ProgressBarWrap = styled.div`
  background-color: #f4eee8;
  width: 100px;
  height: 10px;
  border-radius: 16px;
  margin-right: 10px;
  padding: 0;
`

const ProgressBarFill = styled.div`
  background-color: #114e60;
  height: 100%;
  min-width: 0px;
  border-radius: 16px;
`

const Text = styled.p`
  margin: 0;
  color: #767676;
`

const ProgressBar = () => {
  const tasks = useSelector(store => store.todos.tasks)

  //Function to filter tasks done
  const countCompleted = () => {
    const completedTasks = tasks.filter(task => task.isComplete === true) 
    return completedTasks.length
  }

  return (
    <Container>
      <ProgressBarWrap >
        <ProgressBarFill style={{width: countCompleted()/tasks.length*100}}></ProgressBarFill>
      </ProgressBarWrap>
      <Text>{countCompleted()}/{tasks.length} done</Text>
    </Container>
  )
}

export default ProgressBar 