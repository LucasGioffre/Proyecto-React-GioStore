import { useState ,useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Toast, ToastContainer } from "react-bootstrap"
import "../App.css"

function ItemCount({ item }) {
    const [count, setCount] = useState(0)
    const { addToCart, toastMessage, clearToastMessage } = useContext(CartContext)

    const handleAdd = () => {
        setCount((prevCount) => prevCount + 1);
      };

      const handleSubstract = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
      };

    const handleAddToCart = () => {
        if (count > 0) {
            addToCart({ ...item, quantity: count })
        }
    }

    return (
        <div className="cart-button">
            <button className="cart-action" onClick={handleSubstract}>-</button>
            <span className="cart-count">{ count }</span>
            <button className="cart-action" onClick={handleAdd}>+</button>
            <button className="buy-now" onClick={handleAddToCart}>AGREGAR AL CARRITO</button>
            <ToastContainer className="toast-product">
                <Toast onClose={clearToastMessage} show={!!toastMessage} delay={4000} autohide>
                    <Toast.Body><strong>{toastMessage}</strong></Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}

export default ItemCount