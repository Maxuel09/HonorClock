import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

const CustomNavbar = () => {
    const [show, setShow] = useState(false);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogin = () => {
        // Lógica de inicio de sesión
        console.log("Iniciar sesión con:", loginEmail, loginPassword);
        // Aquí puedes agregar la lógica de autenticación
        // Por ejemplo, puedes enviar los datos a un servidor para verificar las credenciales
    };

    const handleRegister = () => {
        // Lógica de registro
        console.log("Registrarse con:", registerEmail, registerPassword);
        // Aquí puedes agregar la lógica para registrar al usuario
        // Por ejemplo, puedes enviar los datos a un servidor para crear una nueva cuenta
    };

    return (
        <div style={{ margin: '0 20px' }}>
            <Navbar bg="black" expand="lg" variant="dark">
                <Navbar.Brand as={Link} to="/HC/Home">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/HC/Rebajas">Ofertas</Nav.Link>
                        <Nav.Link as={Link} to="/HC/Relojes">Relojes</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/HC/Categorias/Inteligentes">Inteligentes</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/HC/Categorias/Analogicos">Analógicos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/HC/Categorias/Digitales">Digitales</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        
                        <Button variant="link" onClick={handleShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" style={{ fontSize: '24px' }}>
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Inicio de sesión / Registro</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        
                        <Form.Group className="mb-3" controlId="formLoginEmail">
                            <Form.Label>Email de inicio de sesión</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLoginPassword">
                            <Form.Label>Contraseña de inicio de sesión</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" onClick={handleLogin}>
                            Iniciar sesión
                        </Button>

                        <hr />

                    
                        <Form.Group className="mb-3" controlId="formRegisterEmail">
                            <Form.Label>Email de registro</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formRegisterPassword">
                            <Form.Label>Contraseña de registro</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" onClick={handleRegister}>
                            Registrarse
                        </Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default CustomNavbar;
