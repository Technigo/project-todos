import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/TasksSlice'
import { Filters } from './reducers/FilterSlice'
import filters from './reducers/FilterSlice'
import InputContainer from 'components/Input/InputContainer'
import Globals from 'components/Globals'
import FilterButton from 'components/FilterButton'
import Filter from 'components/Filter'
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
  width: 80%;
  box-shadow: 4px 3px 48px -27px ${props => props.theme.colors.blackOpaque};
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  } 
`;

const FilterContainer = styled.div `
  width: 100%;
`;

const reducer = combineReducers({
  tasks: tasksReducer,
  filters
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Globals>
     <Provider store={store}>
        <Wrapper>  
            <Inner>
              <FilterContainer>
                  <FilterButton filter={ Filters.SHOW_ALL }/>
                  <FilterButton filter={ Filters.SHOW_COMPLETED }/>
                  <FilterButton filter={ Filters.SHOW_ACTIVE }/>
              </FilterContainer>
              <Filter />
              <InputContainer/>
            </Inner>
        </Wrapper>
      </Provider>
    </Globals>
  )
}
