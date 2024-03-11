
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const OrderList = () => {
  return (
    <ListGroup as="ol" numbered className="mt-1  ">
    <ListGroup.Item
        as="li"
        className="d-flex  align-items-center"
    >
        <div className="ms-2 me-auto">
            <div className="fw-bold">Reloj
            </div>
           
        </div>
        
        <div className="me-5">eliminar</div>
        <Badge bg="primary" pill>
        <Form.Control placeholder="Stock" type="number" className="w-25" />
        </Badge>
        <div className="ms-5">eliminar</div>
    </ListGroup.Item>
</ListGroup>
  )
}

export default OrderList