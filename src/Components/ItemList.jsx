import { Container, Row} from 'react-bootstrap'
import Item from './Item'

function ItemList({items}) {
    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {items.map(item => (<Item item={item} key={item.id} /> ))}
            </Row>
        </Container>
    )
}

export default ItemList