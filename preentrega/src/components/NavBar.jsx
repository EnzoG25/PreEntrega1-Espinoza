import CardWidget from "./CardWidget"

const NavBar = () => {

    return (
        <>
            <div id="contenedor1" className="container">
                <div className="row">
                    <div className="col">
                    <img src="./images/joyas1.avif" alt="logodiamante" width={100}/>
                    </div>
                    <div className="col">
                        <ul className="nav justify-content-center">
                            <li className="nav-item ">
                                <a className="nav-link text-black" aria-current="page" href="#">Anillos</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-black" href="#">Pulseras</a>
                            </li>
                            <li className="nav-item text-black">
                                <a className="nav-link text-black" href="#">Collares</a>
                            </li>
                            <li className="nav-item text-black">
                                <a className="nav-link text-black"  href="#">Dijes</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col text-end">
                        <CardWidget/>
                    </div>
                </div>
            </div>

        </>
    )

}

export default NavBar