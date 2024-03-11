
import OrderList from '../Components/OrderList/OrderList';
import Button from 'react-bootstrap/Button';
const Order = () => {
    return (
        <div className="mt-5 d-flex flex-column">
            <div className='bg-light'>
                <h1 className='mt-4'>Carrito</h1>
                <hr />
            </div>
            <div className="m-0">
                <OrderList />
                <OrderList />
                
            </div>
            
            <div className='bg-light d-flex justify-content-between'>
                <div className='m-4'><h1 className='mb-2'>Total</h1>
                
                </div>
                <div>
                <h1 className='m-4 text-center'>23€</h1>

                <Button className='m-4 ps-5 pe-5' variant="warning">Pagar</Button>
                </div>
                
            </div>

        </div>



    )
}

export default Order