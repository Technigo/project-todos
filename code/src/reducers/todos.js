import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: 1, task: 'Aufraeumen', iscomplete: false},
  {id: 2, task: 'Maulwurf rausschmeissen', iscomplete: false},
  {id: 3, task: 'Muell rausbringen', iscomplete: false},
  {id: 4, task: 'Coding', iscomplete: false},
]

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {}
})

export default todos