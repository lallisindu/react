// TitleBar.js
import React from 'react';
import { Container } from 'react-bootstrap'; // Import Container from react-bootstrap
import { Link, useLocation } from 'react-router-dom';
import styles from './Title.module.css'; // Import CSS module styles

const TitleBar = () => {
  const location = useLocation();

  // Check if the current route is the home page
  const isHomePage = location.pathname === '/home';

  return (
    <div className={`${styles.titleBar} py-3`} style={{ borderBottom: '1px solid white' }}>
      <Container className="d-flex flex-column align-items-center" style={{ paddingBottom: isHomePage ? '40px' : '0' }}>{/* Apply flexbox classes for vertical centering */}
      <h1 className="text-white mt-3" style={{ fontFamily: 'Roboto', fontSize: '3rem' }}>The Generics</h1> {/* Set font family */}
        {isHomePage && (
          <div className="text-center">

            
            <button className="btn btn-primary mb-3">Get Latest Album</button>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '100px', backgroundColor: 'lightblue', borderRadius: '50%' }}>
              <p style={{ margin: 'auto', textAlign: 'center' }}>One PayButton</p>
            </div>
           
          </div>
        )}
        
      </Container>
    </div>
  );
};

export default TitleBar;
