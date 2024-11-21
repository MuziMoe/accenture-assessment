import React from 'react';
import './HeroSection.scss';
import confidenceImage from '../assets/confidence.jpeg'; // Import your image

const HeroSection: React.FC = () => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${confidenceImage})` }}
    >
      <div className="hero-content">
        <h1>Live with Confidence</h1>
        <br></br>
        <br></br>
        <p>José Mourinho brings confidence to pan-African Sanlam </p>
        <p>campaign.</p>
        <br></br>
        <br></br>
        <button className="btn">View project</button>
      </div>
    </div>
  );
};

export default HeroSection;
