import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '189438fdjhrjejioe9845',
      name: 'ToDo1',
      isNew: false
    },
    {
      id: '189438fdjhrjejioe9846',
      name: 'ToDo2',
      isNew: false
    },
    {
      id: '189438fdjhrjejioe9847',
      name: 'ToDo3',
      isNew: false
    }
  ]
}

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo: (store, action) => {
    // Mutable
    //   store.items.push(action.payload);
    // Immutable
      store.items = [...store.items, action.payload];
    }
  }
});

export default todos;