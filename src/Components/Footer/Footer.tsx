const Footer = () => {
    return (
        <div className="footer" style={{ backgroundColor: "black", textAlign: "center", marginTop : "20px"}}>
            <form>
                <input
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    required
                    style={{
                        padding: "10px",
                        marginRight: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc"
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Suscríbete
                </button>
            </form>
            <p className="footer__text footer__text--center" style={{ color: "white" }}>Aporte legal </p>
            <p className="footer__text footer__text--center" style={{ color: "white" }}>Desarrollado por CoderHouse</p>
            <p className="footer__text footer__text--center footer__text--bold footer__text--large " style={{ color: "white" }}>© 2022 HonorClock. Todos los derechos reservados.</p>


        </div>
    )
}

export default Footer