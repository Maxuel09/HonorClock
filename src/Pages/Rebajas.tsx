import "../Css/Rebajas.css"
import { CreateProductForm } from "../Components/CreateProduct/CreateProductForm";
import EditProduct from "../Components/EditProduct/EditProduct";
const Rebajas = () => {
    return (
        <section className="rebajasContainer">
            <div className="rebajas">Rebajas 
            <CreateProductForm />
            {/* <EditProduct /> */}
            </div>
        </section>
    )
}

export default Rebajas