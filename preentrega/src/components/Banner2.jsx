import imgCarU from "../assets/images/anillocorazones.jpeg"
import imgCarD from "../assets/images/anillorombo.jpeg"
import imgCarT from "../assets/images/anillosello.jpeg"

const Banner2 = () => {

    return (

        <> 
            <section className="carrusel">
            <div id="carouselExampleFade" className="carousel slide carousel-fade ">
                <div className="carousel-inner pb-20">
                    <div className="carousel-item active ">
                        <img src={imgCarU} className="d-block w-60 " alt="anillocorazones"/>
                    </div>
                    <div className="carousel-item">
                        <img src={imgCarD} className="d-block w-60 " alt="anillorombo"/>
                    </div>
                    <div className="carousel-item">
                        <img src={imgCarT} className="d-block w-60 " alt="anillosello"/>
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
            <section>
                <img src="images/joyas4.avif" alt=""/>
            </section>
        </>
    )

}

export default Banner2