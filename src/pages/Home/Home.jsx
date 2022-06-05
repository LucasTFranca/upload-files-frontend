import React, { useContext, useId } from 'react';
import FileCard from '../../components/FileCard/FileCard';
import Header from '../../components/Header/Header';
import FileContext from '../../context/FileContext';

import './Home.css';

function Home() {
  const { files } = useContext(FileContext);

  return (
    <>
      <Header />
      <div className="home">
        <div className="file-cards-container">
          {
            files.map((file) => <FileCard key={useId()} file={file} />)
          }
        </div>
      </div>
    </>
  );
}

export default Home;
