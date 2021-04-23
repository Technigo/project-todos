import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: {
    tasks: [],
    showForm: false
  },
  reducers: {
    toggleShowForm: (store) => {
      store.showForm = !store.showForm;
    },    
    toggleComplete: (store, action) => {
      const updatedTasks = store.tasks.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        } else {
          return todo;
        }
      });

      store.tasks = updatedTasks;
    }, 
    addTodo: (store, action) => {
      store.tasks = [...store.tasks, action.payload];

      store.showForm = !store.showForm;
    },
    removeTodo: (store, action) => {
      const decreasedTasks = store.tasks.filter(todo => todo.id !== action.payload);

      store.tasks = decreasedTasks;
    },
    completeAllTodos: (store) => {
      const updatedCompletion = store.tasks.map(todo => {
        if (todo.isComplete === false) {
          return {
            ...todo,
            isComplete: true
          }
        } else {
          return todo;
        }
      });
      
      store.tasks = updatedCompletion;
    },
    toggleEdit: (store, action) => {
      const editedTask = store.tasks.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isEdit: !todo.isEdit
          }
        } else {
          return todo;
        }
      });

      store.tasks = editedTask;
    }, 
    editTodoContent: (store, action) => {
      const editedTodoContent = store.tasks.map(todo => {
        if (todo.id === action.payload) {
          console.log(todo.content)

          return {
            ...todo,
            isEdit: !todo.isEdit,
            content: todo.content
          }
        } else {
          return todo;
        }
      });

      store.tasks = editedTodoContent;
    }
  }
});

export default todos;