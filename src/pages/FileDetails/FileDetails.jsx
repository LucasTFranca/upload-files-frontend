import fileDownload from 'js-file-download';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { getFile } from '../../service';

import './FileDetails.css';

function FileDetails() {
  const [file, setFile] = useState('');
  const { name } = useParams();

  const fileName = name.split('-')[1];

  useEffect(() => {
    async function loadFile() {
      const data = await getFile(name);

      setFile(data);
    }

    loadFile();
  }, [setFile]);

  function downloadFile() {
    fileDownload(file, fileName);
  }

  return (
    <>
      <Header />
      <div className="file-details">
        <h1>{fileName}</h1>
        <p>{file}</p>
        <button onClick={downloadFile} type="button">download</button>
      </div>
    </>
  );
}

export default FileDetails;
