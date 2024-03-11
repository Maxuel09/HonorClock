import "../Css/Home.css";
import Slider from "../Components/Slider/Slider";
import CardProduct from "../Components/CardProduct/CardProduct";
import jsonData from "../service/product.json"


const Home = () => {
    return (
        <main className="HomeContainer">
            <Slider />

            <div className="HomeCardProductContainer">
                <div className="text_container">
                    <h2>Productos destacados</h2>
                    <h4>que te encantaran</h4>
                </div>

                <div className="card_container">
                    <CardProduct product={jsonData} />
                    <CardProduct product={jsonData} />
                    <CardProduct product={jsonData} />
                    <CardProduct product={jsonData} />
                    <CardProduct product={jsonData} />
                    <CardProduct product={jsonData} />
                </div>
            </div>

            <div className="HomeCardProductContainer">
                <div className="text_container">
                    <h2>Productos destacados</h2>
                    <h4>que te encantaran</h4>
                </div>

                <div className="card_container">
                    <CardProduct product={jsonData} />
                    <CardProduct product={jsonData} />
                    <CardProduct product={jsonData} />
        
                </div>
            </div>



        </main>
    )
}

export default Home