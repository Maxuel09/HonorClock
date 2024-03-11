import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export const CreateProductForm = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Añadir producto
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton className="bg-dark d-flex justify-content-center" >
                    <Modal.Title className="text-light text-decoration-underline">Añadir producto</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark">
                    <Form>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label >Selecciona una categoria</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Form.Control type="text" placeholder="Nombre" className="mb-3" />

                        <FloatingLabel controlId="floatingSelect" label="Categorias" className="mb-3">
                            <Form.Select aria-label="Floating label select example">
                                <option value="1">Analógicos</option>
                                <option value="2">Digitales</option>
                                <option value="3">Inteligentes</option>
                            </Form.Select>
                        </FloatingLabel>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Stock" type="number" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Precio" type="number" />
                            </Col>
                        </Row>


                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                           
                            <Form.Control as="textarea"    className="mt-3" rows={3} placeholder="Descripción" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-dark d-flex justify-content-evenly '>

                    <Button variant="warning" className='text-light' onClick={handleClose}>
                        Guardar
                    </Button>

                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal></div>
    )
}
