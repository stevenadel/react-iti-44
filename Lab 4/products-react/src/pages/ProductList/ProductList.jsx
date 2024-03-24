import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getProductsListThunk } from "../../store/slices/product";
import Product from "../../components/Product/Product";

export default function ProductList() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsListThunk())
  }, [dispatch])

  const { list, isLoading } = useSelector(state => state.product);

  return (
    <Container>
      <h2>Products</h2>
      <hr />
      <Row xs={1} md={3} className="g-4">
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          list && list.map(product => (
            <Col key={product.id}>
              <Product product={product} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}
