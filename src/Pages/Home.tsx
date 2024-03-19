import  { useEffect, useState } from "react";
import "../Css/Home.css";
import Slider from "../Components/Slider/Slider";
import CardProduct from "../Components/CardProduct/CardProduct";
import { ProductService } from "../service/CardProduct";

const Home = () => {
    const [products, setProducts] = useState([]);

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
            <Slider />

            <div className="HomeCardProductContainer">
                <div className="text_container">
                    <h2>Productos destacados</h2>
                    <h4>que te encantarán</h4>
                </div>

                <div className="card_container">
                    {products.map((product, index) => (
                        <CardProduct product={product} key={index} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Home;
