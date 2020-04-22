import React from 'react'
import styled from 'styled-components'
import { AddItem } from 'components/AddItem'
import { ListItem } from 'components/ListItem'
import { ShowSummery } from 'components/ShowSummery'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: DodgerBlue;
  min-height: 100vh;
`

export const TodoContainer = () => {
  return(
    <Container>
      <ShowSummery />
      <AddItem />
      <ListItem />
    </Container>
  )
}
