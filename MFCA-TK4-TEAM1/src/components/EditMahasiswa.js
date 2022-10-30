import React, { useContext } from 'react';
import MahasiswaForm from './MahasiswaForm';
import { useParams } from 'react-router-dom';
import MahasiswasContext from '../context/MahasiswasContext';

const EditMahasiswa = ({ history }) => {
  const { mahasiswas, setMahasiswas } = useContext(MahasiswasContext);
  const { id } = useParams();
  const mahasiswaToEdit = mahasiswas.find((mahasiswa) => mahasiswa.id === id);

  const handleOnSubmit = (mahasiswa) => {
    const filteredMahasiswas = mahasiswas.filter((mahasiswa) => mahasiswa.id !== id);
    setMahasiswas([mahasiswa, ...filteredMahasiswas]);
    history.push('/');
  };

  return (
    <div>
      <MahasiswaForm mahasiswa={mahasiswaToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditMahasiswa;