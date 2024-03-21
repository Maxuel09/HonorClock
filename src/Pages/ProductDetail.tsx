import React, { useEffect, useState, useCallback } from 'react';
import { Image, Row, Col, Container, Card, Button } from 'react-bootstrap';
import "../Css/Categories.css";
import { useParams } from "react-router-dom";
import { ProductService } from "../service/CardProduct.js";
import useProducts from "../Components/context/useProducts";



const ProductDetail: React.FC = () => {
    console.log(useParams())
    const { productById } = useParams()
    console.log(productById)
    const [product, setProduct] = useState([]);
    const fetchProduct = async () => {
        const product = await ProductService.getProductById(productById);
        console.log(product)
        setProduct(product);
    }
    useEffect(() => {
        fetchProduct()
    }, [])
    return (
        <div className="container_categories text-white">
            <Container className="d-flex justify-content-center space-between mp-5">
                <Row className=' text-white m-5'>
                    <Col>
                        <Image src={product.image} className='w-75 border border-warning ' rounded alt="" />
                    </Col>
                    <Col className='d-flex flex-column'>

                        <h3>{product.name}</h3>
                        <hr />
                        <Card.Text>{product.description}</Card.Text>
                        <hr />
                        <div className='d-flex justify-content-between text-end mt-3'>
                            <h3 className=''>Precio:</h3>
                            <h3 className=''>{product.price}€</h3>
                        </div>
                        <hr />
                      

                        <Button className='mt-5 ' variant="warning">Añadir al carrito</Button>
                        
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default ProductDetail;
