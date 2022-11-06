import React, { useState } from 'react'
import styled from 'styled-components/macro'

import { AddStartIcon, OuterWrapper, StartBtn } from 'GlobalStyle'

import startBtn from '../assets/addlist_icon.png'

// Components
import { TodoList } from './TodoList'

export const StartState = () => {
  const [startTodo, setStartTodo] = useState(false)

  const onStartAdding = () => { setStartTodo(true) }

  return (
    <>
      {startTodo && <TodoList />}
      {!startTodo && (
        <OuterWrapper>
          <StartStateText>
          Click &quot;add to do&quot; and make a list, so you remember everything! {' '}
          </StartStateText>
          <Imagewrapper>
            <StartBtn onClick={onStartAdding}>
              <AddStartIcon src={startBtn} alt="start adding Todos" />
            </StartBtn>
          </Imagewrapper>
        </OuterWrapper>
      )}
    </>
  )
}

// ----------Styled Components---------

const StartStateText = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  padding: 1em 2em 2em;
  text-align: center;
  max-width: 30ch;
  align-self: center;
  letter-spacing: 1.5px;
  line-height: 1.4em;
`

const Imagewrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
