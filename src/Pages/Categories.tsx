// import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import CardProduct from "../Components/CardProduct/CardProduct";
import "../Css/Categories.css";
import categorias from "../Assets/Img/categorias.png";

interface Product {
      name: string;
      description: string;
      price: number;
      category: string;
      image: string;
  }

const Categories = () => {

      const [products, setProducts] = useState<Product[]>([]);
      const [selectedCategory, setSelectedCategory] = useState('Todos');
  
      useEffect(() => {
          // Función para cargar los productos de la base de datos
          const fetchProducts = async () => {
              try {

                  const response = await fetch('https://honorclock.up.railway.app/HC/Product');
                  const data = await response.json();
                  setProducts(data);
              } catch (error) {
                  console.error('There was an error loading the products:', error);
              }
          };
  
          fetchProducts();
      }, []);
  
      // Función para manejar el cambio de categoría
      const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
          setSelectedCategory(event.target.value);
      };
  
      // Filtrar productos por categoría seleccionada
      const filteredProducts = selectedCategory === 'Todos'
          ? products
          : products.filter(product => product.category === selectedCategory);

  return (
    <section className='container_categories'>
       <div className="column justify-content-center">
          <div className="col-12 col-md-12 text-center "><img src={categorias} alt="Categorías" style={{ width: "100%", maxWidth: "500px", marginBottom: "2.5em", marginTop: "3em"}} />
          </div>
           
          <div className="col-8 col-md-2 mx-auto text-center" style={{ marginBottom: "120px" }}>
            <Form.Select aria-label="Default select example" onChange={handleCategoryChange} style={{ backgroundColor: "#D5A021", color: "white", fontSize: "20px", fontFamily: "Montserrat, sans-serif" }}>
              
              <option value="Todos">Todos</option>
                        <option value="Inteligente">Inteligentes</option>
                        <option value="Analógico">Analógicos</option>
                        <option value="Digital">Digitales</option>
            </Form.Select>
          </div>

          <div className="row justify-content-center">
          {/* Renderizar los productos filtrados */}
          {filteredProducts.map((product, index) => (
              <div key={index} className="col-12 col-md-3 mb-4" >
                <div className="d-flex justify-content-center">
                    <CardProduct product={product} />
                </div>
              </div>
          ))}

          </div>
       </div>
    </section>
   
  );
}

export default Categories