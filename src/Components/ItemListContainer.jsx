import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemList from "./ItemList"
import { getProducts, getProductsByCategory } from "../firebase/db"

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        if(categoryId) {
            getProductsByCategory(categoryId)
                .then(res => setItems(res))
        } else {
            getProducts()
            .then(res => setItems(res))
        }
    }, [categoryId])
    
    return (
        <ItemList items={items}/>
    )
}

export default ItemListContainer