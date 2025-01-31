import cartLogo from "../assets/cartLogo.svg"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartWidget() {
    const { getQty } = useContext(CartContext)
    return (
        <>
            <img src={cartLogo} style={{
                width: "30px",
                position: "absolute",
                top: "65px",
                right: "50px"
            }}/>
            <div style={{
                backgroundColor: "#50db19",
                position: "absolute",
                top: "45px",
                right: "40px",
                width: "20px",
                height: "20px",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black"
            }}>
                { getQty() }
            </div>
        </>
    )
}

export default CartWidget