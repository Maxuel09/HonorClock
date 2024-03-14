
import './CardProduct.css';

type ProductType = {
    name: string;
    description: string;
    price: number;
    image: string;
}

const CardProduct = ({ product }: { product: ProductType }) => {
    

    return (
        <main className="cardProductContainer">
            <section>
                <div className="card-product">
                    <div className="card-image-container">
                        <img src={product.image} alt={product.name} className="image-icon" />
                    </div>
                    <p className="card-title">{product.name}</p>
                    {/* <p className="card-des">{product.description}</p> */}
                    <p className="card-price">${product.price}</p>
                </div>
            </section>
        </main>
    );
}

export default CardProduct;