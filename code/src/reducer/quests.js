import { createSlice } from '@reduxjs/toolkit'

const questsList = []
const categories = ['Main', 'Side', 'Miscellaneous']

const initialState = {
  questsList,
  categories
}

export const quests = createSlice({
  name: 'quests',
  initialState,
  reducers: {
    createQuest: (state, action) => {
      const { text, category } = action.payload
      state.questsList.push({
        text,
        status: false,
        category
      })
    },
    doneToggle: (state, action) => {
      const { questIndex } = action.payload
      state.questsList[questIndex].status = !state.questsList[questIndex].status
    },
    deleteQuest: (state, action) => {
      const { questIndex } = action.payload
      state.questsList.splice(questIndex, 1)
    },
    deleteAllQuests: () => {
      return initialState
    }
  }
})