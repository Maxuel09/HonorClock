import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';


const OrderList = () => {
    return (
        <ListGroup variant="flush">
            <ListGroup.Item className='border'>
                <div className='d-flex justify-content-between m-4'>
                    <div>Producto</div>
                    <div className=''> <Form.Control className='w-25' placeholder="unidades" type="number" /></div>
                    <div>Eliminar</div>
                    <div>2€</div>
                </div>
            </ListGroup.Item>

        </ListGroup>
    )
}

export default OrderList