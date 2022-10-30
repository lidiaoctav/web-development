import React, { useState } from 'react';
import { Form, Button, Radio, Dropdown, Select } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const MahasiswaForm = (props) => {
    const [mahasiswa, setMahasiswa] = useState(() => {
        return {
          nim: props.mahasiswa ? props.mahasiswa.nim : '',
          namePerson: props.mahasiswa ? props.mahasiswa.namePerson : '',
          address: props.mahasiswa ? props.mahasiswa.address : '',
          comment: props.mahasiswa ? props.mahasiswa.comment : '',
          hobby: props.mahasiswa ? props.mahasiswa.hobby : '',
          gender: props.mahasiswa ? props.mahasiswa.gender : ''
        };
      });

  const [errorMsg, setErrorMsg] = useState('');
  const { 
          nim,
          namePerson,
          address,
          comment,
          hobby,
          gender 
        } = mahasiswa;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [nim,
                    namePerson,
                    address,
                    comment,
                    hobby,
                    gender];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const mahasiswa = {
        id: uuidv4(),
        nim,
        namePerson,
        address,
        comment,
        hobby,
        gender
      };
      props.handleOnSubmit(mahasiswa);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'gender':
        setMahasiswa((prevState) => ({
          ...prevState,
          gender: value
        }));
        break;
      default:
        setMahasiswa((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  const clearForm = () => {
        setMahasiswa({
          nim:"",
          namePerson:"",
          address:"",
          comment:"",
          hobby:"",
          gender:""
        });
  };
  
  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="nim">
          <Form.Label>NIM</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="nim"
            value={nim}
            placeholder="Enter NIM"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="namePerson">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="namePerson"
            value={namePerson}
            placeholder="Enter name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="address"
            value={address}
            placeholder="Enter address"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Check
            value="Man"
            name="gender"
            type="radio"
            aria-label="radio 1"
            label="Man"
            onChange={handleInputChange}
            checked={gender === "Man"}
          />
          <Form.Check
            value="Woman"
            type="radio"
            name="gender"
            aria-label="radio 2"
            label="Woman"
            onChange={handleInputChange}
            checked={gender === "Woman"}
          />
      </Form.Group>
        <Form.Group controlId="hobby">
          <Form.Control as="select" aria-label="Default select example" 
              onChange={handleInputChange}
              name="hobby"
              value={hobby}>
            <option value="">Select Hobby</option>
            <option value="Singing">Singing</option>
            <option value="Sport">Sport</option>
            <option value="Reading">Reading</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="comment"
            value={comment}
            placeholder="Enter Comment"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
        <Button variant="primary"  className="submit-btn" onClick={()=>clearForm()}>
          Clear
        </Button>
      </Form>
    </div>
  );
};

export default MahasiswaForm;