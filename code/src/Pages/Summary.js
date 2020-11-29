import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from '../Reducers/tasks'

import { List } from '../Components/List'
import { Header } from '../Components/Header'
import { UserInput } from '../Components/UserInput'
import { Button } from '../library/Button'
import { Main, Wrapper } from '../library/Containers'

export const Summary = () => {
  const [clearBtn] = useState(true)
  const [outerWrapper] = useState(true)
  const [noList] = useState(true)

  const dispatch = useDispatch()
  const items = useSelector((store) => store.tasks.items);

  if(items.length<0){
    return noList
  }

  return (
    <Main noList={noList}>
      <Wrapper outerWrapper={outerWrapper}>
        <Header />
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
      </Wrapper>
    </Main>
  )
}
