import { ADD_TODO, TOGGLE_TODO, DELETED } from '../actionsTypes';

const initialState = {
  todos: [],
}

const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        todos: [
          ...state.todos,
          { content, completed: false, id }
        ]
      }
    }

    case DELETED: {
      const { id } = action.payload;
      const index = state.todos.findIndex((task) => id === task.id)
      return {
        ...state,
        todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]
      }
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map(obj => obj.id === id ? { ...obj, completed: !obj.completed } : obj);
      return { todos }
    }

    default: {
      return state;
    }
  }
}

export default todos;