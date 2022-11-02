import { createSlice } from '@reduxjs/toolkit';

// const [newToDo, setNewToDo] = useState('');

// const onNewToDo = (event) => {
//   setNewToDo(event.target.value)
// }

const ToDo = createSlice({
  name: 'ToDos',
  initialState: {
    items: [
      { id: 1, name: 'Watch video on actions & reducers', complete: true },
      { id: 2, name: 'Follow redux codealong', complete: true },
      { id: 3, name: 'Fork weekly assignment', complete: true },
      { id: 4, name: 'Create a todo app', complete: false }
    ]
  },

  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCaught = !item.isCaught
        }
      });
    },
    addToDo: (store, action) => {
      store.items.push(action.payload)
    }
  }
});

export default ToDo;
