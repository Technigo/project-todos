import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { bag } from './redux/reducers/bag' 
import { ListedThings } from 'components/ListedThings'
import { AddThings } from 'components/AddThings'
import { Header } from 'components/Header'
import styled from 'styled-components'


const reducer = combineReducers({
  bag: bag.reducer
})
const store = configureStore({ reducer })

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  aling-items: center;
  background-color: #478A72;
  margin: 0px;
`

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <AddThings />
        <ListedThings />
      </Wrapper>
    </Provider>
  )
}
