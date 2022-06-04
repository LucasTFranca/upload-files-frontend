import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import fileDownload from 'js-file-download';
import { getFile } from '../service';

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
    <div>
      <span>{fileNameWithoutDate}</span>
      <button onClick={redictPageToFileDetails} type="button">view more</button>
      <button onClick={downloadFile} type="button">download</button>
    </div>
  );
}

FileCard.propTypes = {
  file: PropTypes.object,
}.isRequired;

export default FileCard;
