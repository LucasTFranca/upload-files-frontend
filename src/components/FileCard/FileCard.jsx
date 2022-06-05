import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import fileDownload from 'js-file-download';
import { getFile } from '../../service';

import './FileCard.css';

function FileCard({ file: fileProps }) {
  const navigate = useNavigate();
  const { fileName } = fileProps;

  const fileNameWithoutDate = fileName.split('-')[1];

  function redictPageToFileDetails() {
    navigate(`/file/details/${fileName}`);
  }

  async function downloadFile() {
    const file = await getFile(fileName);

    fileDownload(file, fileNameWithoutDate);
  }

  return (
    <div className="file-card-container">
      <div className="name-file-container">
        <span>{fileNameWithoutDate}</span>
      </div>

      <div className="button-file-container">
        <button onClick={redictPageToFileDetails} type="button">view more</button>
        <button id="donwload-button" onClick={downloadFile} type="button">download</button>
      </div>
    </div>
  );
}

FileCard.propTypes = {
  file: PropTypes.object,
}.isRequired;

export default FileCard;
