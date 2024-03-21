// import '../Components/Footer/Footer.css'; 
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ContactForm.css';

interface ContactFormProps {
 onSubmit: (data: { name: string; email: string; phone: string; reason: string; message: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');
 const [reason, setReason] = useState('consulta');
 const [message, setMessage] = useState('');

 const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ name, email, phone, reason, message });
 };

 return ( 
        
    <div className="container mt-5 p-5 col-12 border rounded border-dark">
      <h3>¿En qué podemos ayudarte?</h3>
    <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <Form.Group controlId="formName">
              <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
          </div>
          
          <div className="col-md-6">
            <Form.Group controlId="formPhone">
              <Form.Label></Form.Label>
                <Form.Control type="tel" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formReason">
              <Form.Label></Form.Label>
                  <Form.Control as="select" value={reason} onChange={(e) => setReason(e.target.value)}>
                    <option value="consulta">Consulta</option>
                    <option value="soporte">Soporte</option>
                    <option value="comentario">Comentario</option>
                  </Form.Control>
            </Form.Group>
          </div>
        </div>

      <Form.Group controlId="formMessage">
        <Form.Label></Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Mensaje" value={message} onChange={(e) => setMessage(e.target.value)} />
      </Form.Group>

      <Button className="btn-custom" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
 );
};

export default ContactForm;