import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import FileContext from './FileContext';
import { getAllFiles } from '../service';

function FileProvider({ children }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function loadFiles() {
      const data = await getAllFiles();

      setFiles(data);
    }

    loadFiles();
  }, [setFiles]);

  async function updateFiles() {
    const data = await getAllFiles();

    setFiles(data);
  }

  const state = useMemo(() => ({ files, updateFiles }), [files]);

  return (
    <FileContext.Provider value={state}>
      { children }
    </FileContext.Provider>
  );
}

FileProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default FileProvider;
