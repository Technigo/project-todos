import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import slugify from 'slugify';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    lists: [
      {
        name: 'My Day',
        slug: 'my-day',
        type: 'primary',
        tasks: []
      }
    ]
  },
  reducers: {
    addTask(state, action) {
      const index = state.lists.findIndex((list) => list.slug === action.payload.slug);
      state.lists[index].tasks.unshift({
        id: uniqid(),
        value: action.payload.value,
        complete: false
      });
    },
    toggleTask(state, action) {
      const list = state.lists.find((l) => l.slug === action.payload.listSlug);
      const task = list.tasks.find((t) => t.id === action.payload.id);
      task.complete = !task.complete;
    },
    clearList(state, action) {
      const list = state.lists.find((l) => l.slug === action.payload);
      list.tasks = [];
    },
    deleteTask(state, action) {
      const list = state.lists.find((l) => l.slug === action.payload.listSlug);
      list.tasks = list.tasks.filter((task) => task.id !== action.payload.id);
    },
    addList(state, action) {
      const slug = slugify(action.payload, { lower: true, strict: true });
      state.lists.push({
        name: action.payload,
        slug,
        type: 'project',
        tasks: []
      });
    },
    deleteList(state, action) {
      state.lists = state.lists.filter((list) => list.slug !== action.payload);
    }
  }
});

export const {
  addTask,
  clearList,
  toggleTask,
  deleteTask,
  addList,
  deleteList
} = taskSlice.actions;
export default taskSlice.reducer;
