import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const Categories = () => {
  return (
    <>
    <h1 className="text-white">CATEGORÍAS</h1>
    <Form.Select className="text-white" aria-label="Default select example" style={{ color: "#D5A021" }}>
  
        <option value="1"><Link className="nav-link text-white" to="/HC/Categorias">Inteligentes</Link></option>
        <option value="2"><Link className="nav-link text-white" to="/HC/Categorias">Analogicos</Link></option>
        <option value="3"><Link className="nav-link text-white" to="/HC/Categorias">Digitales</Link></option>
  </Form.Select>
  </>
  );
}

export default Categories