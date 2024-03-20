
import './CardProduct.css';

interface ProductType {
    _id: string;
    image: string;
    name: string;
    price: number;
    stock: number;
    description: string;
  }
const CardProduct = ({ productCard }: { productCard: ProductType }) => {
    

    return (
        <main className="cardProductContainer">
            <section>
                <div className="card-product">
                    <div className="card-image-container">
                        <img src={productCard.image} alt={productCard.name} className="image-icon" />
                    </div>
                    <p className="card-title">{productCard.name}</p>
                    {/* <p className="card-des">{product.description}</p> */}
                    <p className="card-price">${productCard.price}</p>
                </div>
            </section>
        </main>
    );
}

export default CardProduct;