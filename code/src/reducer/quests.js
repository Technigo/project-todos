import { createSlice } from '@reduxjs/toolkit'

const questsList = [
  {
    text: 'asfasd'
    // categories: 'Main'
  },
  {
    text: 'a123d'
    // categories: 'Main'
  },
  {
    text: 'asfawqersd'
    // categories: 'Main'
  }]
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
      const { text } = action.payload
      state.questsList.push({
        text
      })
    }
  }
})