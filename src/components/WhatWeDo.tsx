import React from "react";
import "./WhatWeDo.scss"; // Import the CSS for styling
import WebDev from "../assets/WebDev.png"
import MobileApp from "../assets/MobileApp.png"
import UX from "../assets/UX.png"
import Blockchain from "../assets/Blockchain.png"

const WhatWeDo = () => {
  return (
    <section className="hero-section1">
      <h3 className="section-title">What we do</h3>
      <br></br>
      <p className="section-description">
        We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces
      </p>
      <div className="services">
        <div className="service">
          <img src={WebDev} alt="Web Design" />
          <h3>Web development</h3>
          <br></br>
          <p>We use cutting-edge web development technologies to help clients fulfil their business goals through functional, reliable websites.</p>
        </div>
        <div className="service">
          <img src={UX} alt="UX Design" />
          <h3>User experience & design</h3>
          <br></br>
          <p>Our complete web design team will bring your ideas to life and provide you with a high-performing, user-friendly website that delights your users.</p>
        </div>
        <div className="service">
          <img src={MobileApp} alt="Mobile Development" />
          <h3>Mobile app development</h3>
          <br></br>
          <p>Our extensive mobile development experience allows us to create custom mobile apps for iOS and Android with cutting-edge features.</p>
        </div>
        <div className="service">
          <img src={Blockchain} alt="Blockchain Solutions" />
          <h3>Blockchain solutions</h3>
          <br></br>
          <p>We conduct market research and help you explore blockchain-based solutions to enhance your company and achieve your business goals.</p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo ;
