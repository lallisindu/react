import React from 'react';
import utubeImage from '../images/utube.jpeg'; // Import the YouTube icon image

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'skyblue', padding: '5px 0', color: 'white' }}>
      <div className="footer-title" style={{ marginLeft: '300px' }}>
        <h1>The Generics</h1>
      </div>
      <div className="footer-icons" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ backgroundColor: 'skyblue', padding: '5px', borderRadius: '50%' }}>
          <a href="https://www.youtube.com">
            <img src={utubeImage} alt="YouTube" style={{ width: '30px', height: 'auto', marginRight: '30px' }} />
          </a>
        </div>
        <a href="https://spotify.com"><img src="./img/Spotify Logo.png" alt="Spotify" style={{ marginRight: '30px' }} /></a>
        <a href="https://facebook.com"><img src="./img/Facebook Logo.png" alt="Facebook" /></a>
      </div>
    </footer>
  );
}

export default Footer;
