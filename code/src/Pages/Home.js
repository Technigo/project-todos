import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '../Reducers/tasks'

import { List } from '../Components/List'
import { Header } from '../Components/Header'
import { UserInput } from '../Components/UserInput'
import { Button } from '../library/Button'
import { Main, Wrapper, OuterWrapper } from '../library/Containers'

export const Home = () => {
  const dispatch = useDispatch()

  return (
    <Main>
      <OuterWrapper>
        <Header />
        <UserInput />
        <Wrapper>
          <List />
          <Button
            clearBtn={true}
            onClick={() => dispatch(tasks.actions.removeAll())}
          >
            Clear List
          </Button>
        </Wrapper>
      </OuterWrapper>
    </Main>
  )
}
