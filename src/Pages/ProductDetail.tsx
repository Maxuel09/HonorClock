import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import "../Css/Categories.css";
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ProductService } from "../service/CardProduct";
import CardProduct from "../Components/CardProduct/CardProduct";



const ProductDetail = () => {
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
        <div className="container_categories text-white">

            <Container >
                <Row className='pt-5 text-white'>
                    <Col>
                        <h2>imagen reloj  </h2>
                        <img src="../smartwatch-komodo9.png" alt="" />
                    </Col>
                    <Col>
                        <h3>Nombre Reloj</h3>
                    </Col>
                    <Col>
                        <h3 className='text-center' >300€</h3>
                        <Button className='mt-5' variant="warning">Añadir al carrito</Button>
                    </Col>
                </Row>

                <Row className='mt-5 d-flex justify-content-center'>
                    
                        <Card className='bg-light w-75'>
                            <Card.Header as="h5" className='text-center'>Descripción</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere esse, beatae odit eos, dignissimos aliquam omnis reprehenderit consequatur sapiente nam dolore suscipit aliquid dolorem earum est veritatis. Voluptas, molestiae quas!
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    
                </Row>
                <Row className='mt-5'>
                    <h3 className='text-center'>Productos relacionados</h3>
                    <Col className='mt-5 d-flex justify-content-center flex-wrap'>
                        <div className="card_container ">
                            {products.map((product, index) => (
                                <CardProduct product={product} key={index} />
                            ))}
                        </div>
                    </Col>
                </Row>

            </Container>



        </div>
    )
}

export default ProductDetail