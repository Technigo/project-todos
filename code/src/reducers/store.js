import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todos } from 'redux/reducers/todos';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'todo-list',
  storage
}

const reducer = combineReducers({
  todos: todos.reducer
});

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)