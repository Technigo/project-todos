import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'
import Counter from './Counter'

const Header = () => {
  const dispatch = useDispatch();

  const handleClearAllButtonClick = () => {
    dispatch(tasks.actions.clearAll())
  }

  //   const handleAllDoneButtonClick = () => {
  //     dispatch(tasks.actions.AllDone())
  //   }

  return (
    <section>
      <HeaderText>Todays todo list!</HeaderText>
      <CounterAndClearAllBtn>
        <Counter />
        <ClearAllBtn all type="button" onClick={handleClearAllButtonClick}>Clear all </ClearAllBtn>
        {/* <AllDone all type="button" onClick={handleAllDoneButtonClick}>All done </AllDone> */}
      </CounterAndClearAllBtn>
    </section>
  )
}

export default Header;

const HeaderText = styled.h1`
font-size: 40px;
color: #936f63;
text-align: center;
`

const CounterAndClearAllBtn = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

const ClearAllBtn = styled.button`
border: none;
border-radius: 20px;
padding: 7px;
background-color: #eee6dd;
color: #936f63;
margin-right: 30px;
`

// const AllDone = styled.button`
// border: none;
// border-radius: 20px;
// padding: 7px;
// background-color: #eee6dd;
// color: #936f63;
// margin-left: 30px;
// `