import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"
import { getProduct } from "../firebase/db"

function ItemDetailContainer() {
    const [item, setItem] = useState()
    const {itemId} = useParams()

    useEffect(() => {
        getProduct(itemId)
            .then(res => setItem(res))
    }, [itemId])

    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer