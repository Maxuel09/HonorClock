import './AdminProfile.css'
import Card from 'react-bootstrap/Card';
import Botton from '../../Components/Botton';

const AdminProfile = () => {
  return (
    <div className='admin-profile'>
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Tarjetas Admin</Card.Title>
        <Card.Subtitle className="">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
        <div className='display-flex, justify-content, center'>
        <Botton />
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default AdminProfile