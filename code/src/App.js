import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { StartPage } from './components/StartPage';
import IntroPage from 'components/IntroPage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/app" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;