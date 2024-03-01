import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleBar from './components/TitleBar'; // Import TitleBar component
import CartButton from './components/CartButton';

const App = () => {
  // Assuming products array is defined here or fetched from an API
  const products = [
    // Define your products here
    {
      title: 'Album1', // Set title for the first product
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Album2', // Set title for the second product
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Album3',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Album4',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

  return (
    <div>
      <Header />
      <TitleBar /> {/* Include the TitleBar component */}
      <Container className="my-5">
        <h2 className="text-center font-italic font-weight-bold">Music</h2> {/* Centered and italic bold */}
        <Row className="my-4" style={{ width: '800px', margin: 'auto'}} > {/* Set the gutter width to 10 */}
          {/* First row */}
          <Col>
            <Product {...products[0]} />
          </Col>
          <Col>
            <Product {...products[1]} />
          </Col>
        </Row>
        <Row className="my-4" style={{ width: '800px', margin: 'auto'}} > {/* Set the gutter width to 10 */}
          {/* Second row */}
          <Col>
            <Product {...products[2]} />
          </Col>
          <Col>
            <Product {...products[3]} />
          </Col>
        </Row>
      </Container>
      <CartButton />
      <Footer />
    </div>
  );
}

export default App;
