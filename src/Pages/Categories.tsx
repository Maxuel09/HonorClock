import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import CardProduct from "../Components/CardProduct/CardProduct";
import "../Css/Categories.css";
import categorias from "../Assets/Img/categorias.png";

const Categories = () => {
  return (
    
      <div className="column justify-content-center">
          <div className="col-12 col-md-10 text-center "><img src={categorias} alt="Categorías" style={{ width: "100%", maxWidth: "500px", marginBottom: "3em", marginTop: "3em"}} />
          </div>
           
          <div className="col-12 col-md-6">
            <Form.Select aria-label="Default select example" style={{ backgroundColor: "#D5A021", color: "white", fontSize: "20px", fontFamily: "Montserrat, sans-serif" }}>
              <option value="4">
                    <Link className="nav-link text-white" to="/HC/Categorias">Todos</Link>
              </option>
              <option value="1">
                    <Link className="nav-link text-white" to="/HC/Categorias">Inteligentes</Link>
              </option>
              <option value="2">
                    <Link className="nav-link text-white" to="/HC/Categorias">Analógicos</Link>
              </option>
              <option value="3">
                    <Link className="nav-link text-white" to="/HC/Categorias">Digitales</Link>
              </option>
            </Form.Select>
          </div>
      </div>
  
            
  
  
  
  
  );
}

export default Categories