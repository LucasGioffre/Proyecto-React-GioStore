import ItemCount from "./ItemCount"
import { Link } from "react-router"
import "../App.css"

function ItemDetail({item}) {
    return (
        <div className="product-card">
            <Link className="link-home" to="/">Volver al Inicio</Link>
            <div className="product-image">
                <img src={item?.thumbnail} alt="Imagen del producto" />
            </div>
            <div className="product-info">
                <h2 className="product-title">{item?.title}</h2>
                <p className="product-price">${item?.price}</p>
                <ItemCount item={item} />
            </div>
        </div>
    )
}

export default ItemDetail