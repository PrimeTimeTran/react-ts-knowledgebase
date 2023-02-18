import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>About Us</h3>
        <ul>
          <li><a href="/why-us">Product</a></li>
          {/* <li><a href="#">Leadership Team</a></li> */}
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Products</h3>
        <ul>
          <li><a href="#">Product 1</a></li>
          <li><a href="#">Product 2</a></li>
          {/* <li><a href="#">Product 3</a></li> */}
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <ul>
          <li><a href="#">Phone: 555-555-5555</a></li>
          <li><a href="#">Email: info@example.com</a></li>
          {/* <li><a href="#">Address: 123 Main St, Anytown USA</a></li> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
