import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/TasksSlice'
import { Filters } from './reducers/FilterSlice'
import filters from './reducers/FilterSlice'

import InputContainer from 'components/Input/InputContainer'
import Globals from 'components/Globals'
import FilterInput from 'components/FilterInput'
import TaskSummary from 'components/TaskSummary'
import Filter from 'components/Filter'
import styled from 'styled-components'


const reducer = combineReducers({
  tasks: tasksReducer,
  filters
})

const store = configureStore({ reducer })

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 767px;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  border-radius: 32px;
  box-shadow: inset 5px 5px 7px 5px ${props => props.theme.colors.boxshadow}, inset -5px -5px 7px 5px ${props => props.theme.colors.boxshadow};
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;

    @media (min-width: 766px) {
      width: 50%;
    }
  } 
`;

const FilterContainer = styled.fieldset `
    border: none;
    height: 80px;
    padding: 0;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const App = () => {
  return (
    <Globals>
     <Provider store={store}>
        <Wrapper>  
            <Inner>
              <FilterContainer>
                <Form>
                    <FilterInput filter={ Filters.SHOW_ALL }>Show all</FilterInput>
                    <FilterInput filter={ Filters.SHOW_COMPLETED }>Show completed</FilterInput>
                    <FilterInput filter={ Filters.SHOW_ACTIVE }>Show active</FilterInput>
                </Form>  
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
