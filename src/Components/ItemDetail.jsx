import ItemCount from "./ItemCount"
import "../App.css"

function ItemDetail({item}) {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={item?.thumbnail} alt="Imagen del producto" />
            </div>
            <div className="product-info">
                <h2 className="product-title">{item?.title}</h2>
                <p className="product-description">{item?.description}</p>
                <p className="product-price">${item?.price}</p>
                <ItemCount />
                <button className="buy-now">AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}

export default ItemDetail