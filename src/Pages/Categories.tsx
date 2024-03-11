import React from 'react'
import Form from 'react-bootstrap/Form';

function Categories() {
  return (
    <Form.Select aria-label="Default select example">
  
    <option value="1">Inteligentes</option>
    <option value="2">Digitales</option>
    <option value="3">Analógicos</option>
  </Form.Select>
  );
}

export default Categories