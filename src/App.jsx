import React from 'react';
import { Route, Routes } from 'react-router-dom';
import File from './pages/File/File';
import FileDetails from './pages/FileDetails/FileDetails';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/file" element={<File />} />
      <Route path="/file/details/:name" element={<FileDetails />} />
    </Routes>
  );
}

export default App;
