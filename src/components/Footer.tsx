import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-contact">
          <h3>Contact us</h3>
          <h1>Have a Project in mind?</h1>
          <h1>Lets make it happen</h1>
        </div>
        <div className="footer-address">
          <ul>
            <li>22 Street Name, Suburb, 8000</li>
            <li>Cape Town, South Africa.</li>
            <li>+27 21 431 0001</li>
            <li><a href="mailto:enquiries@website.co.za">enquiries@website.co.za</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-grid">
          <div className="footer-row">
            <span>Terms of Service</span>
            <span>Facebook</span>
            <span>Github</span>
            <span>Youtube</span>
            <span>Explore Open Jobs</span>
          </div>
          <div className="footer-row">
            <span>Privacy Policy</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Behance</span>
            <span>       </span>
          </div>
          <div className="footer-row">
            <span>Impressum</span>
            <span>Twitter</span>
            <span>Teams</span>
            <span>Dribble</span>
            <span>©2000-2023 Company Name</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
