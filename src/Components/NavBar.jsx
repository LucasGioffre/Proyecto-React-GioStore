import logo from "../assets/LogoOficial.png"
import { Link } from "react-router"
import CartWidget from "./CartWidget"
import "../App.css"

function NavBar () {
    return (
        <nav style={{
            backgroundColor: "#000000",
            display: "flex",
            margin: "0px",
        }}>
        <Link to="/">
            <img src={logo} style={{
            width: "150px",
            }}/>
        </Link>
        <ul style={{
            backgroundColor: "#000000",
            display: "flex",
            alignItems: "center",
            listStyleType: "none",
            padding: "10px",
            gap: "30px"
        }}>
            <Link to="/category/beauty" className="nav-bar-class">BEAUTY</Link>
            <Link to="/category/furniture" className="nav-bar-class">FURNITURE</Link>
            <Link to="/category/fragrances" className="nav-bar-class">FRAGRANCES</Link>
            <Link to="/category/groceries" className="nav-bar-class">GROCERIES</Link>
        </ul>
        <CartWidget />
        </nav>
    )
}

export default NavBar