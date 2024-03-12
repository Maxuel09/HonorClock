import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const CustomNavbar = () => {
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
                    <Nav.Link as={Link} to="/HC/SignIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" style={{ fontSize: '24px' }}>
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
<<<<<<< HEAD
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/HC/Order">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                    </Link>
                </li>
            </ul>
=======
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

>>>>>>> 87a820f2f9284152de185d4da46d09bc005c29c2
        </div>
    );
}

export default CustomNavbar;
