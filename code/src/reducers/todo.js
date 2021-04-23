import { createSlice } from '@reduxjs/toolkit'

const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    filters: [{ id: 1, name: "all done", status: false}, {id: 2, name: "all undone", status: false}, {id: 3, name: "past deadline", status: false}]

  },
  reducers: {
    toggleChecked: (store, action) => {
      const updatedItems = store.items.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            isComplete: !item.isComplete
          }
        } else {
          return item
        }
      })
      store.items = updatedItems
    },
    deleteItem: (store, action) => {
      store.items = store.items.filter(item => item.id !== action.payload)
    },
    addItem: (store, action) => {
      store.items = [...store.items, action.payload]
    },
    togglePriority: (store, action) => {
      const updatedItems = store.items.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            isPriority: !item.isPriority
          }
        } else {
          return item
        }
      })
      store.items = updatedItems
    },
    clearBoard: (store) => {
      store.items = []
    },
    markAllDone: store => {
      const allDoneItems = store.items.map(item => ({...item, isComplete: true}) )
      store.items = allDoneItems
    },
    toggleFilter: (store, action) => {
      const updatedFilters = store.filters.map(filter => {
        if (filter.id === action.payload) {
          return {
            ...filter,
            status: !filter.status
          }
        } else {
          return filter
        }
      })
      store.filters = updatedFilters
    },
  }

})

export default todo