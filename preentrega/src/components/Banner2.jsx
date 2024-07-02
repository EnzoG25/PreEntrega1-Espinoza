const Banner2 = () => {

    return (

        <> 
            <section className="carrusel">
            <div id="carouselExampleFade" className="carousel slide carousel-fade ">
                <div className="carousel-inner pb-20">
                    <div className="carousel-item active ">
                        <img src="../images/anilloarbol.jpeg" className="d-block w-60 " alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="../images/anillocorazones.jpeg" className="d-block w-60 " alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="../images/anillosello.jpeg" className="d-block w-60 " alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </section>
        </>
    )

}

export default Banner2