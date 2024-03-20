import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CardProduct, { ProductService } from '../../service/CardProduct'
import './Slider.css';

function Slider() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await ProductService.getProducts();
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Carousel>
            {products.map((product) => (
                <Carousel.Item key={product._id}>
                    <img
                        className="d-block w-100"
                        src={product.image}
                        alt={product.name}
                    />
                    <Carousel.Caption>
                        <h3 className="text-white, box">{product.name}</h3>
                        <p>${product.price}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slider;
