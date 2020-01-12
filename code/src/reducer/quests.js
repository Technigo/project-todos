import { createSlice } from '@reduxjs/toolkit'

const questsList = []
const categories = []

const initialState = {
  questsList,
  categories
}

export const quests = createSlice({
  name: 'quests',
  initialState,
  reducers: {}
})