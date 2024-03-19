import { useParams } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import productsJSON from "../../assets/products.json"
import { Link } from "react-router-dom"
import "./ProductDetails.css"

export default function ProductDetails() {
    const productId = useParams().productId

    const products = productsJSON.products
    const product = products.find(prod => prod.id == productId)

    return (
        <>
            <Container>
                <Row>
                    <Link to="/" className="prod-link mb-4">Products List</Link>
                </Row>
                <Image src={product.thumbnail} fluid className="w-75 main-img" />
                <Row className='my-3 align-items-center'>
                    {product.images.map((img, index) => (
                        <Col key={index}>
                            <Image src={img} fluid className="sub-img" />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <h1 className="mt-3">{product.title}</h1>
                    <p className="mb-3 text-secondary">{product.description}</p>
                    <h2 className="my-2">{product.brand}</h2>
                    <h3>{product.category}</h3>
                </Row>
            </Container>
        </>
    )
}
