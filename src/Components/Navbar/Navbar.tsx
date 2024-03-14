
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container-nav" style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
            <ul className="nav justify-content-end navbar navbar-expand-lg navbar-light bg-black ">
                <li className="nav-item ">
                    <Link className="nav-link active text-white" to="/HC/Home">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/HC/Rebajas">Ofertas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/HC/Relojes">Relojes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/HC/Mis UserProducts">Mis Productos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/HC/SignIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
