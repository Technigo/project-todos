import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { ClearButton } from './ClearButton'

export const Header = () => {
  // To get all tasks
  const taskStore = useSelector((store) => store.tasks.items)

  // To get tasks with completed status true
  const completedTasks = taskStore.filter((task) => task.done === true)

  return (
    <HeaderSection>
      <LeftWrapper>
        <HeaderText>To-Do</HeaderText>
        <RegularText>{moment().format('MMM Do')}</RegularText>
      </LeftWrapper>
      <RightWrapper>
        <RegularText>
          {completedTasks.length}/{taskStore.length}done
        </RegularText>
        <ClearButton />
      </RightWrapper>
    </HeaderSection>
  )
}

const HeaderSection = styled.section`
  background: #dddddd;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`
const HeaderText = styled.h1`
  font-size: 50px;
  margin: 0px;
  color: rgb(37, 37, 37);
`
const RegularText = styled.p`
  margin: 0px 10px;
  display: flex;
  align-self: flex-end;
`

const LeftWrapper = styled.div`
  margin: 10px;
`

const RightWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`
