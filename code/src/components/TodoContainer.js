import React from 'react'
import styled from 'styled-components'
import { AddItem } from 'components/AddItem'
import { ListItem } from 'components/ListItem'
import { SettingsContainer } from 'components/SettingsContainer'

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
    <>
      <SettingsContainer />
      <Container>
        <AddItem />
        <ListItem />
      </Container>
    </>
  )
}
