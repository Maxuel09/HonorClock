import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
/* import { useProducts } from '../../service/CardProduct'; */

const EditProduct = (id:string) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { getProductsById, productById } = useProducts();

  
    const [name, setName] = useState(productById.name);
    const [description, setDescription] = useState(productById.description);
    const [price, setPrice] = useState(productById.price);
    const [stock, setStock] = useState(productById.stock);
    const [category, setCategory] = useState(productById.category);
    
    /* const [image, setImage] = useState(productById.image); */
  
 /*    const handleImageChange = (event:any) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
    }; */
  
    useEffect(() => {
      getProductsById(id);
    }, [getProductsById, id]);
  
    const handleChangeName = (e:any) => {
      e.preventDefault();
      const value = e.target.value;
      setName(value);
    };
    const handleChangeDescription = (e:any) => {
      e.preventDefault();
      const value = e.target.value;
      setDescription(value);
    };
    const handleChangePrice = (e:any) => {
      e.preventDefault();
      const value = e.target.value;
      setPrice(value);
    };
    const handleChangeStock = (e:any) => {
      e.preventDefault();
      const value = e.target.value;
      setStock(value);
    };
  
    const handleChangeCategory = (e:any) => {
      e.preventDefault();
      const value = e.target.value;
      setCategory(value);
    };
    
    const handleSubmit = async (e:any) => {
      e.preventDefault();
  
      const URL = "https://honorclock.up.railway.app/HC/Product/" + id;
      let product = {
        name: name,
        price: price,
        description: description,
        category: category,
        stock: stock,

      };

      fetch(URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((respose) => respose.json())
        .then((res) => {
            
            res;
        })
        .catch((error) => {
          console.log(error);
        });
    };
  

    return (
        <div>
            <Button variant="primary"
                onClick={handleShow}>
                Editar producto
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton className="bg-dark d-flex justify-content-center" >
                    <Modal.Title className="text-light text-decoration-underline">Editar producto</Modal.Title>
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
                            onChange={handleChangeName}
                            placeholder={productById.name} className="mb-3" />


                        <Form.Select aria-label="Floating label select example"
                            name="category"
                            onChange={handleChangeCategory}
                            className="mb-3">
                            <option value="1">Analógicos</option>
                            <option value="2">Digitales</option>
                            <option value="3">Inteligentes</option>
                        </Form.Select>

                        <Row>
                            <Col>
                                <Form.Control
                                    name="stock"
                                    onChange={handleChangeStock}
                                    placeholder={productById.stock}
                                    type="number" />
                            </Col>
                            <Col>
                                <Form.Control
                                    name="price"
                                    onChange={handleChangePrice}
                                    placeholder={productById.price}
                                    type="number" />
                            </Col>
                        </Row>


                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1" >


                            <Form.Control as="textarea"
                                name="description"
                                onChange={handleChangeDescription}
                                placeholder={productById.description}
                                className="mt-3"
                                rows={3}
                                />
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
            </Modal></div>
    )
}

export default EditProduct