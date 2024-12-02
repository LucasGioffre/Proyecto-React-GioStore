import cart from "../assets/cart.svg"

function CartWidget() {
    return (
        <>
            <img src={cart} style={{
                width: "30px",
                position: "absolute",
                top: "65px",
                right: "50px"
            }}/>
            <div style={{
                backgroundColor: "#ffbd59",
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
                4
            </div>
        </>
    )
}

export default CartWidget