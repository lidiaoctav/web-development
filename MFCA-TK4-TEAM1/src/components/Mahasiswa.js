import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Mahasiswa = ({
  id,
  nim,
  namePerson,
  address,
  comment,
  hobby,
  gender,
  handleRemoveMahasiswa
}) => {
  const history = useHistory();
  
  return (
    <Card style={{ width: '18rem' }} className="mahasiswa">
      <Card.Body>
        <Card.Title className="mahasiswa-title">{namePerson}</Card.Title>
        <div className="mahasiswa-details">
          <div>NIM: {nim}</div>
          <div>Name: {namePerson} </div>
          <div>Address: {address} </div>
          <div>Gender: {gender} </div>
          <div>Hobby: {hobby}</div>
          <div>Comment: {comment}</div>
          <div>Location: Jakarta Pusat, Indonesia</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
            Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveMahasiswa(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Mahasiswa;