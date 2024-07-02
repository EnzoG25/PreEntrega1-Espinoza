const CardWidget = () => {

    return (

        <>
            <div>
                <button id="boton" type="button" className="btn btn-light position-relative pt-4">
                    
                    <img src="../images/carrito.png" alt="carrito" width={35} id="logocarra"/>
                    <span className="position-absolute top-1 start-1 translate-middle p-1 bg-red
                        ">
                        1
                    </span>
                </button>
            </div>
        </>
    )

}

export default CardWidget