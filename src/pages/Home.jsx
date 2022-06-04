import React, { useContext, useId } from 'react';
import FileCard from '../components/FileCard';
import Header from '../components/Header';
import FileContext from '../context/FileContext';

function Home() {
  const { files } = useContext(FileContext);

  return (
    <div>
      <Header />
      <div>
        {
          files.map((file) => <FileCard key={useId()} file={file} />)
        }
      </div>
    </div>
  );
}

export default Home;
