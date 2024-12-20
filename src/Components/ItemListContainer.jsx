import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemList from "./ItemList"

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const urlBase = `https://dummyjson.com/products`
        const urlByCategory = `https://dummyjson.com/products/category/${categoryId}`

        fetch(categoryId ? urlByCategory : urlBase)
            .then(res => res.json())
            .then(res => setItems(res.products));
    }, [categoryId])
    
    return (
        <ItemList items={items}/>
    )
}

export default ItemListContainer