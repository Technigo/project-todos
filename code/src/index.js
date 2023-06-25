import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styling/Main.css'
import './styling/Header.css'
import './styling/TaskCount.css'
import './styling/AddTask.css'
import './styling/ToDoList.css'
import './styling/Footer.css'
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
