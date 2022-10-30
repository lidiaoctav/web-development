import React, { useContext } from 'react';
import MahasiswaForm from './MahasiswaForm';
import MahasiswasContext from '../context/MahasiswasContext';

const AddMahasiswa = ({ history }) => {
  const { mahasiswas, setMahasiswas } = useContext(MahasiswasContext);

  const handleOnSubmit = (mahasiswa) => {
    setMahasiswas([mahasiswa, ...mahasiswas]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <MahasiswaForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddMahasiswa;