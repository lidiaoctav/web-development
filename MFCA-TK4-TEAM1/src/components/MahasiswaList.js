import React, { useContext } from 'react';
import _ from 'lodash';
import Mahasiswa from './Mahasiswa';
import MahasiswasContext from '../context/MahasiswasContext';

const MahasiswasList = () => {
  const { mahasiswas, setMahasiswas } = useContext(MahasiswasContext);

  const handleRemoveMahasiswa = (id) => {
    setMahasiswas(mahasiswas.filter((mahasiswa) => mahasiswa.id !== id));
  };

  return (
    <React.Fragment>
      <div className="mahasiswa-list">
        {!_.isEmpty(mahasiswas) ? (
          mahasiswas.map((mahasiswa) => (
            <Mahasiswa key={mahasiswa.id} {...mahasiswa} handleRemoveMahasiswa={handleRemoveMahasiswa} />
          ))
        ) : (
          <p className="message">No mahasiswas available. Please add some mahasiswas.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default MahasiswasList;