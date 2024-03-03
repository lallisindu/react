import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { Container, Row, Col } from 'react-bootstrap';
import Product from './Product';

function Store() {
  const { addItemToCart } = useContext(CartContext);

  const products = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

  const handleAddToCart = (item) => {
    addItemToCart(item);
  };

  return (
    <div>
      <Container>
        <h2 className="text-center my-5">Store</h2>
        <Row>
          {products.map((product, index) => (
            <Col key={index} xs={12} md={6} lg={3}>
              <Product {...product} />
              <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button> {/* Move the Button component inside the map function */}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Store;
