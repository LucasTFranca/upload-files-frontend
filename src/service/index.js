import axios from 'axios';

const baseUrl = 'http://localhost:4000';

const getAllFiles = async () => {
  const { data } = await axios.get(`${baseUrl}/file`);

  return data;
};

const getFile = async (fileName) => {
  const { data } = await axios.get(`${baseUrl}/file/download/${fileName}`);

  return data;
};

export {
  getAllFiles,
  getFile,
};
