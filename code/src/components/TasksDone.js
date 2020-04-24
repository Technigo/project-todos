import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const TasksDone = () => {
  const list = useSelector(store => store.todos.list)

  //Hur många tasks som är markerade som done
  const numDone = list.items.filter(item => item.done).length

  return (
    <TasksDoneSection>
      <GoodJob>Good job!</GoodJob>
      <TasksDoneText>{numDone} out of {list.items.length} done. </TasksDoneText>
    </TasksDoneSection>
  )
}

const TasksDoneSection = styled.section`
  display: flex;
  flex-direction:column;
  align-items:center;
  min-width: 40%;
`
const GoodJob = styled.h2`
  margin: 0;
`
const TasksDoneText = styled.h3`
  margin: 0;
`
