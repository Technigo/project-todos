import { createSlice } from '@reduxjs/toolkit'

export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const FilterSlice = createSlice({
  name: 'filters',
  initialState: Filters.SHOW_ALL,
  reducers: {
      setFilters(state, action) {
        return action.payload
    }
  }
})

export const { setFilters } = FilterSlice.actions
export default FilterSlice.reducer