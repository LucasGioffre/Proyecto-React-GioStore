import logo from "../assets/logoOficial.png"
import CartWidget from "./CartWidget"

function NavBar () {
    return (
        <nav style={{
            backgroundColor: "#191919",
            display: "flex",
            margin: "0px",
        }}>
        <img src={logo} style={{
            width: "150px",
        }}/>
        <ul style={{
            backgroundColor: "#191919",
            display: "flex",
            alignItems: "center",
            listStyleType: "none",
            color: "white",
            padding: "10px",
            gap: "30px"
        }}>
            <li>CAMISETAS</li>
            <li>PANTALONES</li>
            <li>CAMPERAS</li>
            <li>BUZOS</li>
        </ul>
        <CartWidget />
        </nav>
    )
}

export default NavBar