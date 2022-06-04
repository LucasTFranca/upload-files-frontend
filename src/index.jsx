import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FileProvider from './context/FileProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FileProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FileProvider>
  </React.StrictMode>,
);

reportWebVitals();
