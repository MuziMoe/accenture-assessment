import React, { useState } from "react";
import "./CaseStudies.scss"; // Import the CSS for styling
import olympianImage from '../assets/olympian.jpeg'; // Import your image
import dragonImage from '../assets/dragon.jpeg'; // Import your image
import skhokhoImage from '../assets/skhokho.jpeg'; // Import your image 

const CaseStudies = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      image: olympianImage,
      title: "The Olympian",
      description: "The only athlete in the world to do her Olympic routine in 2020.",
    },
    {
      image: dragonImage,
      title: "The Savings Jar",
      description: "Grow your savings treasure and grow your dragon.",
    },
    {
      image: skhokhoImage,
      title: "Skhokho seMail",
      description: "Helping South Africans become #CashCleva with Skhokho and TymeBank",
    },
  ];

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % caseStudies.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + caseStudies.length) % caseStudies.length
    );
  };

  return (
    <section className="case-studies">
      <h2 className="section-title">Case studies</h2>
      <div className="case-study-slider">
        {/* Case Study: Display the current slide */}
        <div
          className="case-study"
          style={{ backgroundImage: `url(${caseStudies[currentSlide].image})` }}
        >
          <h3>{caseStudies[currentSlide].title}</h3>
          <p>{caseStudies[currentSlide].description}</p>
        </div>

        {/* Slider Navigation Buttons */}
        <button className="prev" onClick={prevSlide}>{"<"}</button>
        <button className="next" onClick={nextSlide}>{">"}</button>
      </div>
    </section>
  );
};

export default CaseStudies;
