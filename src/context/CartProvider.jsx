import { CartContext } from "./CartContext"
import { useState } from "react"

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [toastMessage, setToastMessage] = useState("")

    const addToCart = item => {
        const isInCart = cart.some(product => product.id === item.id)
        
        if (!isInCart) {
            return setCart([...cart, item])
        }
        
        setToastMessage("El producto ya se encuentra en el carrito")
    }

    const clearToastMessage = () => setToastMessage("")
    
    const getQty = () => {
        const quantities = cart.map(item => item.quantity)
        const totalQty = quantities.reduce((acc, current) => acc + current, 0)
        return totalQty
    }

    const getTotal = () => {
        const totales = cart.map(item => item.quantity*item.price)
        const total = totales.reduce((acc, current) => acc + current, 0)
        return total
    }

    const handleAdd = (id) => {
        setCart((prevCart) => prevCart.map((item) => item.id === id ?
        { ...item, quantity: item.quantity + 1 } : item))
    }

    const handleSubtract = (id) => {
        setCart((prevCart) => prevCart.map((item) => item.id === id && item.quantity > 1 ?
        { ...item, quantity: item.quantity - 1 } : item))
    }

    const handleRemove = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, getQty, getTotal, handleAdd, handleSubtract, handleRemove, clearCart, toastMessage, clearToastMessage }}>
            {children}
        </CartContext.Provider>
    )
}