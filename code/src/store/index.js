import { combineReducers, configureStore } from '@reduxjs/toolkit';
import settings from './settings';
import tasks from './tasks';

const reducer = combineReducers({
  settings,
  tasks
});

export default configureStore({ reducer });

