import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { FontStyles } from 'components/GlobalStyles';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
    <FontStyles />
  </React.StrictMode>
);
