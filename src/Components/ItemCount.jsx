import "../App.css"

function ItemCount() {
    return (
        <div className="cart-button">
            <button className="cart-action">-</button>
            <span className="cart-count">0</span>
            <button className="cart-action">+</button>
        </div>
    )
}

export default ItemCount