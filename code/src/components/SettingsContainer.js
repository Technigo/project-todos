import React from 'react'
import { ShowSummery } from 'components/ShowSummery'
import { ShowFilter } from 'components/ShowFilter'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: DodgerBlue;
`

export const SettingsContainer = () => {
  return (
    <Main>
    <ShowSummery />
    <ShowFilter />
    </Main>
  )
}