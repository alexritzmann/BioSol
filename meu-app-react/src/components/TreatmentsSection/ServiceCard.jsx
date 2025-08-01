

// src/components/TreatmentsSection/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ title, subtitle, description }) => {
  return (
    <div className="service-card">
      <h4>{title}</h4>
      <p className="service-subtitle">{subtitle}</p>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default ServiceCard;