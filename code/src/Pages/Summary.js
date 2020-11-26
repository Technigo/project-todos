import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '../Reducers/tasks'

import { List } from '../Components/List'
import { Header } from '../Components/Header'
import { UserInput } from '../Components/UserInput'
import { Button } from '../library/Button'
import { Main, Wrapper } from '../library/Containers'

export const Summary = () => {
  const [clearBtn, setClearBtn] = useState(true)

  const dispatch = useDispatch()

  return (
    <Main>
      <Header/>
      <UserInput />
      <Wrapper>
        <List />
        <Button
          clearBtn={clearBtn}
          onClick={() => dispatch(tasks.actions.removeAll())}
        >
          Clear List
        </Button>
      </Wrapper>
    </Main>
  )
}
