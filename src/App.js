import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleBar from './components/TitleBar';
import CartButton from './components/CartButton';
import CartModal from './components/CartModal';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const products = [
    // Define your products here
    {
      title: 'Album1',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Album2',
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

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.title === product.title);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productToRemove) => {
    const updatedCartItems = cartItems.filter(item => item.title !== productToRemove.title);
    setCartItems(updatedCartItems);
  };

  const toggleCartModal = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <Header showCart={toggleCartModal} /> 
      <TitleBar />
      <Container className="my-5">
        <h2 className="text-center font-italic font-weight-bold">Music</h2>
        <Row className="my-4" style={{ width: '800px', margin: 'auto'}} >
        
        <Col>
            <Product {...products[0]} />
          </Col>
          <Col>
            <Product {...products[1]} />
          </Col>
        </Row>
        <Row className="my-4" style={{ width: '800px', margin: 'auto'}} >
          <Col>
            <Product {...products[2]} />
          </Col>
          <Col>
            <Product {...products[3]} />
          </Col>
        </Row>
      </Container>
      <CartButton onClick={toggleCartModal} />
      <CartModal show={showCart} onHide={toggleCartModal} cartItems={cartItems} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
}

export default App;
