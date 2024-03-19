import { Container, Row, Col } from "react-bootstrap"
import Product from "../../components/Product/Product"
import productsJSON from "../../assets/products.json"

export default function ProductList() {
    const products = productsJSON.products

    return (
        <Container>
        <h2>Products</h2>
        <hr />
        <Row xs={1} md={3} className="g-4">
          {products.map(product => (
            <Col key={product.id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    )
}
