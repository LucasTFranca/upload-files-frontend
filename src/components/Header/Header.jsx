import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

function Header() {
  const navigate = useNavigate();

  function redirectPage(path) {
    navigate(path);
  }

  function handleClick({ target }) {
    const { id } = target;

    const linkDictionary = {
      home: '/',
      file: '/file',
    };

    redirectPage(linkDictionary[id]);
  }

  return (
    <div className="header">
      <button id="home" onClick={handleClick} type="button">Home</button>
      <button id="file" onClick={handleClick} type="button">File</button>
    </div>
  );
}

export default Header;
