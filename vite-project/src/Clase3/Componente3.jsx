import imagen2 from "../assets/images/julian2.jfif";

const Componente3 = () => {
    let nombre = "Enzo Espinoza";
    let imagen = "julian.jpg"
    let estiloCelesteBlanco = {color: "white", backgroundColor:"lightblue", padding:20};

    return (
        <>
            <h1>JSX</h1>
            <p style={estiloCelesteBlanco}>{nombre}</p>
            <p><img src={imagen} alt={nombre} /></p>
            <p><img src={imagen2} alt={nombre} width={100}/></p>
        </>
    )

}

export default Componente3