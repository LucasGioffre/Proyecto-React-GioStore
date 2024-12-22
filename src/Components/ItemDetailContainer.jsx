import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
    const [item, setItem] = useState()
    const {itemId} = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${itemId}`)
            .then(res => res.json())
            .then(res => setItem(res));
    }, [itemId])

    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer