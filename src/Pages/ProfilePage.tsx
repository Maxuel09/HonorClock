import React, { useState, useEffect } from 'react';
import CardProduct from '../Components/CardProduct/CardProduct';
import Navbar from '../Components/Navbar/Navbar';
import {  Button } from 'react-bootstrap';

interface ProductType {
    name: string;
    description: string;
    price: number;
    image: string;
}

interface UserData {
    name: string;
    productsForSale: ProductType[];
    soldProducts: ProductType[];
}

const ProfilePage = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {setShowModal(true)};
    const handleCloseModal = () => {setShowModal(false)};

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('https://honorclock.up.railway.app/HC/Users');
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data: UserData[] = await response.json();
                setUserData(data[0]); // Esto es ejemplo xq tiene q traer el usuario logado, ahora trae el 1º de la db.
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container">
            {/* <Navbar isLoggedIn={true} /> aquí quiero que traiga un icono de estar logado para deslogarse, pero no se como hacerlo */}
            <div className="row align-items-center">
                <div className="col-md-8">
                    <h1>{userData && userData.name}</h1>
                </div>
                <div className="col-md-4 d-flex justify-content-end">

                {/* <Button variant="primary" onClick={handleOpenModal}> lo quito porque tengo que llamar al modal de añadir producto */}
                    <Button>
                        Añadir Producto
                    </Button>
                </div>
            </div>
            <section>
                <h2>Productos en Venta</h2>
                <div className="row">
                    {userData && userData.productsForSale && userData.productsForSale.length > 0 ? (
                        userData.productsForSale.map(product => (
                            <div key={product.name} className="col-12 col-md-3 mb-4">
                                <CardProduct product={product} />
                            </div>
            ))
        ) : (
                <p>No hay productos en venta.</p>
        )}
                </div>
            </section>

            <section>
                <h2>Productos Vendidos</h2>
                <div className="row">
                    {userData && userData.soldProducts && userData.soldProducts.length > 0 ? (
                        userData.soldProducts.map(product => (
                            <div key={product.name} className="col-12 col-md-3 mb-4">
                                <CardProduct product={product} />
                            </div>
                ))
        ) : (
                <p>No hay productos vendidos.</p>
        )}      
                </div>
            </section>
        </div>
    );
};

export default ProfilePage;