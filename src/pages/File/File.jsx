import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { sendFile } from '../../service';

import './File.css';

function File() {
  const [file, setFile] = useState(undefined);

  async function uploadFile() {
    await sendFile(file);
    alert('Uploaded successfully');
  }

  function handleFile({ target }) {
    setFile(target.files[0]);
  }

  return (
    <>
      <Header />
      <div className="file">
        <div className="file-upload-container">
          <h1>Upload your file!</h1>
          <input onChange={handleFile} type="file" />
          <button onClick={uploadFile} type="button">upload</button>
        </div>
      </div>
    </>
  );
}

export default File;
