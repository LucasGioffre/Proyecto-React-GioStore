import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

function Item({item}) {
    return (
        <Col>
            <Card style={{ width: '18rem', height: "650px", marginTop: "10px", overflow: 'hidden'}}>
                <Card.Img variant="top" src={item.thumbnail}/>
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary" className="mt-auto" style={{backgroundColor: "#ffbd59", borderColor: "#ffbd59", color:"#000000"}}>Ver Producto</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item