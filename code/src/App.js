import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/TasksSlice'
import { Filters } from './reducers/FilterSlice'
import filters from './reducers/FilterSlice'
import InputContainer from 'components/Input/InputContainer'
import Globals from 'components/Globals'
import FilterButton from 'components/FilterButton'
import TaskSummary from 'components/TaskSummary'
import Filter from 'components/Filter'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 767px;
  height: 100vh;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  border-radius: 32px;
  box-shadow: inset 5px 5px 7px 5px ${props => props.theme.colors.boxshadow}, inset -5px -5px 7px 5px ${props => props.theme.colors.boxshadow};
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
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
              <InputContainer/>
              <TaskSummary />
              <Filter />
            </Inner>
        </Wrapper>
      </Provider>
    </Globals>
  )
}
