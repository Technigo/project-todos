import React from 'react'
import {Provider} from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { NewTask } from 'components/NewTask'
import { TaskList } from 'components/TaskList'
import {todoStore} from 'reducers/todoStore'
import {sizes} from 'reducers/sizes'


const reducer = combineReducers({
  todoStore: todoStore.reducer,
  sizes: sizes.reducer
})

const store = configureStore({ reducer });

export const App = () => {

  return (
    <div style={{width:900, backgroundColor:'palegreen'}}>
    <Provider store={store}>
      <div>
     <NewTask />
     <TaskList /> 
     </div>
    </Provider>
</div>
  )
}
