import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1, decription: '1.Go out in the sun!', isComplete: false },
      { id: 2, decription: '2.Watch a sitcom!', isComplete: false },
      { id: 3, decription: '3.Have a glas of prosecco!', isComplete: false }
    ]
  },
  reducers: {

  }

})
export default todos
