import CartList from "./CartList"
import { Link } from "react-router"
import { Button } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "../App.css"

function Cart() {
    const { cart, getTotal } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="text-cart-empty">
                <Link className="link-home" to="/">Volver al Inicio</Link>
                <p>No hay productos en el carrito.</p>
            </div>
        )
    }

    return (
        <div className="cart">
            <Link className="link-home" to="/">Volver al Inicio</Link>
            <CartList items={cart}/>
            <p className="mt-3 fw-bold">Total: $ {getTotal()}</p>
            <Button className="cart-button-buy"><Link to="/checkout" className="link-button-buy">Ir al Checkout</Link></Button>
        </div>
    )
}

export default Cart