import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Title.module.css'; // Import CSS module for styling

const TitleBar = () => {
  return (
    <div className={`${styles.titleBar} py-3`} style={{ borderBottom: '1px solid white' }}>
      <Container className="d-flex justify-content-center align-items-start" style={{ paddingBottom: '40px' }}> {/* Apply flexbox classes for horizontal centering and align the content to the top */}
        <h1 className="text-white mb-1" style={{ fontFamily: 'Roboto', fontSize: '5.5rem', marginTop: '0' }}>The Generics</h1> {/* Set font family */}
      </Container>
    </div>
  );
}

export default TitleBar;