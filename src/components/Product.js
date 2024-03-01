import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ title, price, imageUrl }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '10px', marginBottom: '20px' }}>
      <h5 style={{ textAlign: 'center', marginBottom: '10px', padding: '30px' }}>{title}</h5> {/* Display title above the image */}
      <div style={{ maxWidth: '18rem', margin: 'auto' }}>
        <Card style={{ border: 'none' }}>
          <Card.Img variant="top" src={imageUrl} style={{ maxHeight: '200px', maxWidth: '250px' }} />
          <Card.Body>
            <Card.Text className="position-absolute start-0 bg-light p-0">${price}</Card.Text>
            <Button variant="primary" className="position-absolute bottom-0 end-0" style={{ fontSize: '1rem', padding: '0.1rem 0.5rem' }}>Add to Cart</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Product;
