import React, { useEffect, useState } from 'react';
import './Home.scss'; // Importing the SCSS file
import axios from 'axios';
import HeroSection from '../components/HeroSection';
import WhatWeDo from '../components/WhatWeDo';
import CaseStudies from '../components/CaseStudies';
import LeadingBrands from '../components/LeadingBrands';

const Home: React.FC = () => {

    const [brands, setBrands] = useState<any[]>([]); // Brands data
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      // Fetch the brands data from the backend API
      const fetchBrands = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/brands`);
          setBrands(response.data); // Set the brands data
        } catch (err) {
          setError('Error fetching brands');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBrands();
    }, []);
  
    if (loading) {
      return <div>Loading brands...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
    
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <HeroSection></HeroSection>
      </header>

      {/* About Us Section */}
      <section className="WhatWeDo">
        <WhatWeDo></WhatWeDo>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies">
        <CaseStudies></CaseStudies>
      </section>

      {/* Trusted Brands Section */}
      <section className="brands">
        <LeadingBrands></LeadingBrands>
      </section>

    </div>
  );
};

export default Home;
