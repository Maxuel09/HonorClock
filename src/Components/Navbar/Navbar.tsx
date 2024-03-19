// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import AuthForm from '../../Pages/AuthForm';
// import './Navbar.css';

// const CustomNavbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {

//     // const handleLogout = () => {
//     //     localStorage.removeItem('token');
//     //     window.location.reload();
//     // };
//     // const handleLogout2 = () => {
//     //     localStorage.removeItem('token');
//     //     window.location.reload();
// }
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);


//     return (
//         <div style={{ margin: '0 20px' }}>
//             <Navbar bg="black" expand="lg" variant="dark">
//                 <Navbar.Brand as={Link} to="/HC/Home">Inicio</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto">
//                         <Nav.Link as={Link} to="/HC/Rebajas">Ofertas</Nav.Link>
//                         <Nav.Link as={Link} to="/HC/Relojes">Relojes</Nav.Link>
//                         <Nav.Link as={Link} to="/HC/Categorias">Categorías</Nav.Link>
//                         <Nav.Link as={Link} to="/HC/Perfil">Perfil Usuario</Nav.Link>
//                     </Nav>
//                     {isLoggedIn ? (
//                         <Button variant="link" onClick={handleShow}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" style={{ fontSize: '24px' }}>
//                                 <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
//                                 <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
//                             </svg>
//                         </Button>
//                     ) : (
//                         <Button variant="link" onClick={handleShow}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" style={{ fontSize: '24px' }}>
//                                 <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
//                                 <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
//                             </svg>
//                         </Button>
//                     )}
//                 </Navbar.Collapse>
//             </Navbar>

            
//             <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: '#736B60' }}>
//                 <Offcanvas.Header closeButton className='text-center'>
//                     <h1 className='text_welcome'>WELCOME</h1>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body >
//                     <AuthForm />
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </div>
//     );
// }

// export default CustomNavbar;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AuthForm from '../../Pages/AuthForm';
import './Navbar.css';

const CustomNavbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ margin: '0 20px' }}>
            <Navbar bg="black" expand="lg" variant="dark">
                <Navbar.Brand as={Link} to="/HC/Home">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/HC/Rebajas">Ofertas</Nav.Link>
                        <Nav.Link as={Link} to="/HC/Relojes">Relojes</Nav.Link>
                        <Nav.Link as={Link} to="/HC/Categorias">Categorías</Nav.Link>
                        <Nav.Link as={Link} to="/HC/Perfil">Perfil Usuario</Nav.Link>
                    </Nav>
                    {isLoggedIn ? (
                        <Button variant="link" onClick={handleShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" style={{ fontSize: '24px' }}>
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                        </Button>
                    ) : (
                        <Button variant="link" onClick={handleShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" style={{ fontSize: '24px' }}>
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                        </Button>
                    )}
                </Navbar.Collapse>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: '#736B60' }}>
                <Offcanvas.Header closeButton className='text-center'>
                    <h1 className='text_welcome'>WELCOME</h1>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <AuthForm />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default CustomNavbar;

