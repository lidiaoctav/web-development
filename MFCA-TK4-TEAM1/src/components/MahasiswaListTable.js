import React, { useContext } from 'react';
import _ from 'lodash';
import Mahasiswa from './Mahasiswa';
import MahasiswasContext from '../context/MahasiswasContext';
import { Button, Card, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const MahasiswasListTable = () => {
  const { mahasiswas, setMahasiswas } = useContext(MahasiswasContext);
  const history = useHistory();
  const handleRemoveMahasiswa = (id) => {
    setMahasiswas(mahasiswas.filter((mahasiswa) => mahasiswa.id !== id));
  };

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>NIM</th>
        <th>Address</th>
        <th>Gender</th>
        <th>Hobby</th>
        <th>Comment</th>
        <th>Location</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {!_.isEmpty(mahasiswas) ? (
          mahasiswas.map((mahasiswa, index) => (
            <tr key={mahasiswa.id}>
              <td>
                {index + 1}
              </td>
              <td>
                {mahasiswa.namePerson}
              </td>
              <td>
                {mahasiswa.nim}
              </td>
              <td>
                {mahasiswa.address}
              </td>
              <td>
                {mahasiswa.gender}
              </td>
              <td>
                {mahasiswa.hobby}
              </td>
              <td>
                {mahasiswa.comment}
              </td>
              <td>
                Jakarta Pusat, Indonesia
              </td>
              <td>
              <Button variant="primary" onClick={() => history.push(`/edit/${mahasiswa.id}`)}>
                  Edit
              </Button>{' '}
              <Button variant="danger" onClick={() => handleRemoveMahasiswa(mahasiswa.id)}>
                Delete
              </Button>
              </td>
              </tr>
          ))
        ) : (
          <p className="message">No mahasiswas available. Please add some mahasiswas.</p>
        )}
    </tbody>
  </Table>
  );
};

export default MahasiswasListTable;