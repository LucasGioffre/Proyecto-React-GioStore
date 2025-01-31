import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router'
import "../App.css"

function Item({item}) {
    return (
        <Col>
            <Card style={{ width: '18rem', height: "650px", marginTop: "10px", overflow: 'hidden'}}>
                <Card.Img className='item-photo' variant="top" src={item.thumbnail}/>
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{item.title}</Card.Title>
                    <Button variant="primary" className="mt-auto item-button" as={Link} to={`/item/${item.id}`}>VER PRODUCTO</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item