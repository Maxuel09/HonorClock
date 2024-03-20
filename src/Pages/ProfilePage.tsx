import  { useState, useEffect } from 'react';
import CardProduct from '../Components/CardProduct/CardProduct';
import '../Css/Profilepage.css';
import {CreateProductForm}  from "../Components/CreateProduct/CreateProductForm";

interface ProductType {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    image: string;
}

interface UserData {
    name: string;
    email:string;
    productsForSale: ProductType[];
    soldProducts: ProductType[];
}

const ProfilePage = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // const [showModal, setShowModal] = useState(false);

    // const handleOpenModal = () => {setShowModal(true)};
    // const handleCloseModal = () => {setShowModal(false)};

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
        <div className="container w-100 mt-5 pt-5">
            {/* <Navbar isLoggedIn={true} /> aquí quiero que traiga un icono de estar logado para deslogarse, pero no se como hacerlo */}
            <div className="row">
 
    <div className="col-sm-6">
        <div className="row">
            <div className="col-sm-3">
                <h4>Nombre:</h4>
            </div>
            <div className="col-sm-9">
                <h3>{userData && userData.name}</h3>
            </div>
            <div className="col-sm-3">
                <h4>Email:</h4>
            </div>
            <div className="col-sm-9">
                <h3>{userData && userData.email}</h3>
            </div>
        </div>
    </div>

    <div className="col-sm-6 d-flex justify-content-end">
        <CreateProductForm/>
    </div>
</div>
            

            <section className="my-5 ">
                <h2 className="text-center">Productos en Venta:</h2>
                <div className="row align-items-center">
                    {userData && userData.productsForSale && userData.productsForSale.length > 0 ? (
                        userData.productsForSale.map(product => (
                            <div key={product.name} className="col-12 col-md-3 mb-4">
                                <CardProduct product={product} />
                            </div>
            ))
        ) : (
                <p className="text-center">No hay productos en venta.</p>
        )}
                </div>
            </section>

            <section className="my-5">
                <h2 className="text-center">Productos Vendidos:</h2>
                <div className="row">
                    {userData && userData.soldProducts && userData.soldProducts.length > 0 ? (
                        userData.soldProducts.map(product => (
                            <div key={product.name} className="col-12 col-md-3 mb-4">
                                <CardProduct product={product} />
                            </div>
                ))
        ) : (
                <p className="text-center">No hay productos vendidos.</p>
        )}      
                </div>
            </section>
        </div>
    );
};

export default ProfilePage;