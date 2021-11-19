import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

const quests = createSlice({
  name: 'quests',
  initialState: {
    items: [],
  },
  reducers: {
    addQuest: (store, action) => {
      const newQuest = {
        id: uniqid(),
        text: action.payload,
        status: 'todo',
        isComplete: false,
      }

      store.items = [...store.items, newQuest]
    },

    toggleAllQuests: (store, action) => {
      store.items = store.items.map((item) => {
        return {
          ...item,
          status: action.payload ? 'completed' : 'todo',
          isComplete: action.payload,
        }
      })
    },

    toggleQuest: (store, action) => {
      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedQuest = {
            ...item,
            status: item.isComplete ? 'todo' : 'completed',
            isComplete: !item.isComplete,
          }
          return updatedQuest
        } else {
          return item
        }
      })

      store.items = updatedItems
    },

    removeQuest: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload)
    },

    changeStatus: (store, action) => {
      store.items = store.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            status: action.payload.value,
            isComplete: action.payload.value === 'completed',
          }
        }
        return item
      })
    },
  },
})

export default quests
