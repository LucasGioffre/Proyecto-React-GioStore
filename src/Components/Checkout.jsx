import { Button, Form, Col, Row, Toast } from "react-bootstrap"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { newOrder } from "../firebase/db"
import { serverTimestamp } from "firebase/firestore"
import { useNavigate } from "react-router"
import "../App.css"

function Checkout() {
    const { cart, getTotal, clearCart } = useContext(CartContext)
    const [show, setShow] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [validated, setValidated] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target

        if (form.checkValidity() === false) {
            setValidated(true)
            return
        }

        const [name, email, telefono] = form

        const order = {
            buyer: { name: name.value, email: email.value, telefono: telefono.value },
            items: cart,
            date: serverTimestamp(),
            total: getTotal(),
        };

        try {
            const docRef = await newOrder(order)
            setOrderId(docRef.id)
            setShow(true)

            setTimeout(() => {
                navigate("/")
                clearCart()
            }, 10000)
        } catch (error) {
            console.error("Error al generar la orden:", error)
        }
    }

    return (
        <div className="checkout">
            <Form className="form-checkout" noValidate validated={validated} onSubmit={handleSubmit}>
                <h3>Completa los datos para finalizar la compra:</h3>

                <Form.Group controlId="validationCustom01" className="form-group">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control required type="text" placeholder="Coloca tu nombre" />
                    <Form.Control.Feedback type="invalid">
                        Porfavor ingresa tu nombre
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="email" className="form-group">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control required type="email" placeholder="Escribe tu email" />
                    <Form.Control.Feedback type="invalid">
                        Porfavor ingresa tu email
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="telefono" className="form-group">
                    <Form.Label>Telefono:</Form.Label>
                    <Form.Control required type="text" placeholder="Escribe tu número de telefono" />
                    <Form.Control.Feedback type="invalid">
                        Porfavor ingresa tu telefono
                    </Form.Control.Feedback>
                </Form.Group>
                <Toast className="toast-position" onClose={() => setShow(false)} show={show}>
                    <Toast.Header>
                        <strong className="me-auto">Su comprobante de compra es:</strong>
                    </Toast.Header>
                    <Toast.Body><strong>{orderId}</strong></Toast.Body>
                </Toast>
                <Button type="submit" className="cart-button-buy form-button">Finalizar Compra</Button>
            </Form>
        </div>
    )
}

export default Checkout