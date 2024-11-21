import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LeadingBrands.scss'; // Import the CSS for styling

const LeadingBrands: React.FC = () => {
  const [brands, setBrands] = useState<any[]>([]); // Brands data from API
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch brands data from the backend API
  useEffect(() => {
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
    <section className="brands">
        <h3>You'll be in good company</h3>
        <br></br>
        <br></br>
        <br></br>
      <h2>Trusted by leading brands</h2>
      <br></br>
      <div className="brand-container">
        {brands.map((brand) => (
          <div key={brand._id} className="brand-card">
            <img src={brand.logoUrl} alt={brand.name} className="brand-logo" />
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadingBrands;
