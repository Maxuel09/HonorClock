import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const CreateProductForm = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    const [datos, setDatos] = useState({
        name: "",
        price: 0,
        description: "",
        category: "",
        image: "",
        stock: 0,

    });

    /* const [image, setImage] = useState("");
   
      const handleImageChange = (event) => {
       const file = event.target.files[0];
       const reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = () => {
         setImage(reader.result);
       };
     }; */

    const handleChange = (e: any) => {
        e.preventDefault();
        setDatos({
            ...datos,

            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const URL = "https://honorclock.up.railway.app/HC/Product/";

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos),
            });

            if (response.ok) {
                console.log("Datos actualizados con éxito");


            } else {
                console.error("Error al enviar datos a la API");
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };



    return (
        <div>
            <Button className="btn-custom"
                onClick={handleShow}>
                Añadir producto
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton className="bg-dark d-flex justify-content-center" >
                    <Modal.Title className="text-light text-decoration-underline">Añadir producto</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark">
                    <Form
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label  >Selecciona una categoria</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Form.Control
                            type="text"
                            name="name"
                            onChange={handleChange}
                            placeholder="Nombre" className="mb-3" />


                        <Form.Select aria-label="Floating label select example"
                            name="category"
                            onChange={handleChange}
                            className="mb-3">
                            <option value="1">Analógicos</option>
                            <option value="2">Digitales</option>
                            <option value="3">Inteligentes</option>
                        </Form.Select>

                        <Row>
                            <Col>
                                <Form.Control
                                    name="stock"
                                    onChange={handleChange}
                                    placeholder="Stock"
                                    type="number" />
                            </Col>
                            <Col>
                                <Form.Control
                                    name="price"
                                    onChange={handleChange}
                                    placeholder="Precio"
                                    type="number" />
                            </Col>
                        </Row>


                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1" >


                            <Form.Control as="textarea"
                                name="description"
                                onChange={handleChange}
                                className="mt-3"
                                rows={3}
                                placeholder="Descripción" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Button variant="warning"
                                    type="submit"
                                    className='text-light'
                                    onClick={handleClose}>
                                    Guardar
                                </Button>
                            </Col>

                            <Col>
                                <Button
                                    variant="danger"
                                    onClick={handleClose}>
                                    Cancelar
                                </Button>
                            </Col>
                        </Row>



                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-dark d-flex justify-content-evenly '>


                </Modal.Footer>
            </Modal></div>)
    
}
