import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/TasksSlice'
import filters from './reducers/FilterSlice'
import Filter from 'components/Header/Filter'
import HeaderContainer from 'components/Header/HeaderContainer'
import Globals from 'components/Globals'
import styled from 'styled-components'



const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  box-shadow: 4px 3px 48px -27px ${props => props.theme.colors.blackOpaque};
  } 
`;

const reducer = combineReducers({
  tasks: tasksReducer,
  filters
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Globals>
      <Wrapper>  
          <Inner>
            <Provider store={store}>
              <HeaderContainer/>
              <Filter />
            </Provider>
          </Inner>
      </Wrapper>
    </Globals>
  )
}
