import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { sendFile } from '../../service';

import './File.css';

function File() {
  const [file, setFile] = useState(undefined);

  async function uploadFile() {
    await sendFile(file);
  }

  function handleFile({ target }) {
    setFile(target.files[0]);
  }

  return (
    <>
      <Header />
      <div className="file">
        <div>
          <label htmlFor="file">
            <input onChange={handleFile} id="file" type="file" />
          </label>
          <button onClick={uploadFile} type="button">upload</button>
        </div>
      </div>
    </>
  );
}

export default File;
