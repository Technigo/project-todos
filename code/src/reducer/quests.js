import { createSlice } from '@reduxjs/toolkit'

const questsList = [
  {
    text: 'asfasd',
    category: 'Main',
    status: false
  },
  {
    text: 'a123d',
    category: 'Main',
    status: false
  },
  {
    text: 'asfawqersd',
    category: 'Main',
    status: false
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
    }
  }
})