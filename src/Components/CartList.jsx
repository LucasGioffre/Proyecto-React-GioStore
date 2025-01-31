import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartList() {
  const { cart, handleAdd, handleSubtract, handleRemove } = useContext(CartContext)

  return (
    <ListGroup className='w-50'>
        {cart.map(item => (
          <ListGroup.Item className='list-group-item' key={item.id}>
              <div className='item-info'>
                {item.title} x{item.quantity} ${item.price}
                <Button className="cart-list-button" onClick={() => handleSubtract(item.id)}>-</Button>
                <Button className="cart-list-button" onClick={() => handleAdd(item.id)}>+</Button>
              </div>
                <Button className='cart-list-button' onClick={() => handleRemove(item.id)}>X</Button>
            </ListGroup.Item>
        ))}
    </ListGroup>
  );
}

export default CartList;