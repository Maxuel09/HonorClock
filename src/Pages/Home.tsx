import { useEffect, useState } from "react";
import "../Css/Home.css";
import Slider from "../Components/Slider/Slider";
import CardProduct from "../Components/CardProduct/CardProduct";
import { ProductService } from "../service/CardProduct";
import ContactForm from "../Components/Contact/ContactForm";
import '../../src/Components/Navbar/Navbar.css'
import { Link } from 'react-router-dom';

interface Product {
    _id: string;
    image: string;
    name: string;
    price: number;
    stock: number;
    description: string;
}

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);
console.log(products)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await ProductService.getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <main className="HomeContainer">
            <div className="container_main ">
            <Slider />
            </div>

            <div className="HomeCardProductContainer">
                <div className="text_container">
                    <h2>Productos destacados</h2>
                    <h4>¡que te encantarán!</h4>
                </div>

                <div className="card_container">
                    {products.map(product => (
                        <Link to={`/HC/Productos/${product._id}`} key={product._id}>
                            <CardProduct productCard={product} />
                        </Link>
                    ))}
                </div>
            </div>
            
            <div className="w-100">
                <ContactForm/>
            </div>
        </main>
    );
};

export default Home;
