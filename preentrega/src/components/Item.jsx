const Item = ({item}) => {

    return (
        <>
            <div className="card" >
                <img src={item.image} className="card-img-top" alt={item.name}/>
                    <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        <p className="card-text">{item.prize}</p>
                    </div>
            </div>
        </>
    )

}

export default Item
