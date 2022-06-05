import axios from 'axios';

const baseUrl = 'https://upload-files-backendd.herokuapp.com';

const getAllFiles = async () => {
  const { data } = await axios.get(`${baseUrl}/file`);

  return data;
};

const getFile = async (fileName) => {
  const { data } = await axios.get(`${baseUrl}/file/download/${fileName}`);

  return data;
};

const sendFile = async (file) => {
  const form = new FormData();
  form.append('file', file);

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  const axiosFile = axios.create();

  await axiosFile.post(`${baseUrl}/file/upload`, form, config);
};

export {
  getAllFiles,
  getFile,
  sendFile,
};
