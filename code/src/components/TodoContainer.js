import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/Header'
import { AddItem } from 'components/AddItem'
import { ListItem } from 'components/ListItem'
import { ToggleItem } from 'components/ToggleItem'
import { DeleteItem } from 'components/DeleteItem'
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
      {/* <Header /> */}
      <AddItem />
      <ListItem />
      <ShowSummery />
    </Container>
  )
}


{/* <Header />
<AddItem />
<ListItem />
<ToggleItem />
<SetDone />
<ShowSummery /> */}