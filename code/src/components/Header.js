import React from 'react'
import moment from 'moment'

import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'

import styled from 'styled-components'

import { ButtonStyle, ButtonClear } from '../lib/Button'


export const Header = () => {

  const dispatch = useDispatch()

  const handleClearList = () => {
    dispatch(
      tasks.actions.removeAllTasks()
      )
  }

  return(
    <Container>
      <ContainerLeft>
        <Text>My Things To do</Text>
        <DateText>{moment().format("MMMM Do, Y")}</DateText>
      </ContainerLeft>
      <ContainerRight>
        <ContainerButton>
          <ButtonClear onClick={handleClearList}>CLEAR LIST</ButtonClear>
        {/* <button onClick={handleClearList}>CLEAR</button> */}
        </ContainerButton>
      </ContainerRight>
    </Container>
  )
}

// Clear all todos in list

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: #387adf; */
  background: #46539e;
  padding: 20px;
  color: white;
  /* font-weight: 700; */
  margin: 0;
  /* height: 150px; */
`;

const ContainerLeft = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 120px;
  width: 150px;
`
const ContainerRight = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 100px;
  
`;

const ContainerButton = styled.div`
  margin-top: 90px;

`;
const DateText = styled.h3`
  font-size: 12px;
  /* font-weight: 200; */
  font-weight: 100;
  color: #EFEBE9;
  margin: 0;
`;

const Text = styled.h1`
  font-size: 34px;
  /* font-weight: 200; */
  font-weight: 300;
  color: #EFEBE9;
  margin: 0 0 10px 0;
`;
