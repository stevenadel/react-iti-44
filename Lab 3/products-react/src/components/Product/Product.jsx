import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Product.css"

export default function Product({ product, viewProduct }) {
    const navigate = useNavigate()

    return (
        <Card className="prod-card" onClick={() => navigate(`/product/${product.id}`)}>
            <Card.Img src={product.thumbnail} className="prod-img" />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.brand}</Card.Text>
                <Card.Text>{product.category}</Card.Text>
            </Card.Body>
        </Card>
    )
}
