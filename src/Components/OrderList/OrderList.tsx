import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

type ProductType = {
    name: string;
    description: string;
    price: number;
    image: string;
}

const OrderList = ({ product }: { product: ProductType }) => {
    return (
        <ListGroup variant="flush">
            <ListGroup.Item className='border'>
                <div className='d-flex justify-content-between m-4'>
                    <div><img src={product.image} alt={product.name} className="image-icon" /></div>
                    <div>{product.name}</div>
                    <div className=''> <Form.Control className='w-25' placeholder="unidades" type="number" /></div>
                    <div>Eliminar</div>
                    <div>{product.price}</div>
                </div>
            </ListGroup.Item>

        </ListGroup>
    )
}

export default OrderList