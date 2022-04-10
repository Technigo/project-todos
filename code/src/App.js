import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { tasks } from "./reducers/tasks";


import Header from 'components/Header'
import AddTasks from 'components/AddTasks'
import FilterTasks from 'components/FilterTasks'
import AllTasks from 'components/AllTasks'

import { GlobalStyles } from "components/styles/Global";
import { FlexColumn } from 'components/styles/Containers.styled'

const reducer = {tasks: tasks.reducer}

const store = configureStore({ reducer: reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <FlexColumn>
          <GlobalStyles />
          <Header />
          <AddTasks />
          <FilterTasks />
          <AllTasks />
        </FlexColumn>
      </main>
    </Provider>
  )
}
