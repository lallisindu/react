import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const DynamicStore = () => {
  const [products, setProducts] = useState([
    // your products array
  ]);

  return (
    <Container>
      <Row>
        {products.map((product, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  Price: ${product.price}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DynamicStore;