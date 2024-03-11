
import './CardProduct.css';

type ProductType = {
    name: string;
    description: string;
    price: number;
    image: string;
}

const CardProduct = ({ product }: { product: ProductType }) => {
    const { name, description, price, image } = product;

    return (
        <main className="cardProductContainer">
            <section>
                <div className="card-product">
                    <div className="card-image-container">
                        <img src={image} alt={name} className="image-icon" />
                    </div>
                    <p className="card-title">{name}</p>
                    <p className="card-des">{description}</p>
                    <p className="card-price">${price}</p>
                </div>
            </section>
        </main>
    );
}

export default CardProduct;