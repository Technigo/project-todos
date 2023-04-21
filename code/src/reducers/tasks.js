/* eslint-disable operator-linebreak */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: '12345',
      name: 'Cross off your first task',
      isDone: false
    },
    {
      id: '34567',
      name: 'Wow, cross another one!',
      isDone: false
    },
    {
      id: '6578453',
      name: 'Last task for now!',
      isDone: false
    }
  ]
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // first argument references state of the store,
    // second argument references the data that is passed down from a component
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    },
    deleteAllTasks: (store) => {
      store.items = []
    },
    deleteSingleTask: (store, action) => {
      const id = action.payload
      const CopyOFTasksFromStore = store.items
      const condition = (element) => element.id === id
      const foundIndex = CopyOFTasksFromStore.findIndex(condition)
      CopyOFTasksFromStore.splice(foundIndex, 1)
      // updating the store
      store.items = CopyOFTasksFromStore
    },
    toggleIsDone: (store, action) => {
      const id = action.payload
      const CopyOFTasksFromStore = store.items
      const condition = (element) => element.id === id
      const foundIndex = CopyOFTasksFromStore.findIndex(condition)
      CopyOFTasksFromStore[foundIndex].isDone =
        !CopyOFTasksFromStore[foundIndex].isDone
      // updating the store
      store.items = CopyOFTasksFromStore
    }
  }
})

export default tasks
