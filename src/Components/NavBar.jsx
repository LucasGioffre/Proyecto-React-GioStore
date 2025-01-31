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
            <Link to="/category/camisetas" className="nav-bar-class">CAMISETAS</Link>
            <Link to="/category/pantalones" className="nav-bar-class">PANTALONES</Link>
            <Link to="/category/camperas" className="nav-bar-class">CAMPERAS</Link>
            <Link to="/category/botines" className="nav-bar-class">BOTINES</Link>
            <Link to="/cart" className="nav-bar-class"><CartWidget /></Link>
        </ul>
        </nav>
    )
}

export default NavBar