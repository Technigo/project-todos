import React from 'react'
import styled from 'styled-components'
import { TaskList } from './TaskList';
import { AddTask } from './AddTask'
import Clip from './Assets/clip.png'

const MainWrapper = styled.main`
 width: 360px;
 margin: 100px auto 20px auto;
 background-color: #DDF3FF;
 border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
 padding-top: 2rem;
 padding-bottom: 2rem;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`
const ClipImage = styled.img`
height: 100px;
width: 100px;
margin-top: -7rem;
`

export const ToDo = () => {
  return (
    <MainWrapper>
      <ClipImage src={Clip} />
      <AddTask />
      <TaskList />
    </MainWrapper>
  )
}
