import React from 'react';

interface BrandCardProps {
  name: string;
  logoUrl: string;
}

const BrandCard: React.FC<BrandCardProps> = ({ name, logoUrl }) => {
  return (
    <div className="brand-card">
      <img src={logoUrl} alt={name} className="brand-logo" />
      <h3 className="brand-name">{name}</h3>
    </div>
  );
};

export default BrandCard;
