import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

const Product = ({ title, price, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px auto' }}>
      <Card.Img variant="top" src={imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
      
      </Card.Body>
    </Card>
  );
}

export default Product;