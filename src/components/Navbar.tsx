import React from 'react';
import './Navbar.scss';
import Logo from '../assets/Logo.png'

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo">
          <img src={Logo} alt="Brand Logo" />
          
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#">Services</a></li>
          <li><a href="#">Industries</a></li>
          <li><a href="#">Cases</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Call-to-Action Button */}
        <button className="cta-button">Let’s Talk</button>

        {/* Hamburger Menu (for responsiveness) */}
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
