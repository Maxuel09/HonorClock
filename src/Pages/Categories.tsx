import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import categorias from "../Assets/Img/categorias.png";

const Categories = () => {
  return (
    <>
            <img src={categorias} alt="Categorías" style={{ width: "100%", maxWidth: "500px" }} />
            <Form.Select aria-label="Default select example" style={{ backgroundColor: "#D5A021", color: "white" }}>
                <option value="1" style={{ color: "white" }}>
                    <Link className="nav-link text-white" to="/HC/Categorias">Inteligentes</Link>
                </option>
                <option value="2" style={{ color: "white" }}>
                    <Link className="nav-link text-white" to="/HC/Categorias">Analógicos</Link>
                </option>
                <option value="3" style={{ color: "white" }}>
                    <Link className="nav-link text-white" to="/HC/Categorias">Digitales</Link>
                </option>
  </Form.Select>
  </>
  );
}

export default Categories