import { useEffect, useState } from "react";
import arrayProductos from "../assets/images/json/productos.json"
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);;

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos)
            }, 2000)
        })
        promesa.then(response => {
            setItems(response)
            
        })
    }, [])
    return (

        <>
                <ItemList items={items}/>

        </>


    )
}

export default ItemListContainer