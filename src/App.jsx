import React from 'react';
import { Route, Routes } from 'react-router-dom';
import File from './pages/File';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/file" element={<File />} />
    </Routes>
  );
}

export default App;
