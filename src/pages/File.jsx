import React, { useState } from 'react';
import Header from '../components/Header';
import { sendFile } from '../service';

function File() {
  const [file, setFile] = useState(undefined);

  async function uploadFile() {
    await sendFile(file);
  }

  function handleFile({ target }) {
    setFile(target.files[0]);
  }

  return (
    <div>
      <Header />
      <div>
        <label htmlFor="file">
          <input onChange={handleFile} id="file" type="file" />
        </label>
        <button onClick={uploadFile} type="button">upload</button>
      </div>
    </div>
  );
}

export default File;
