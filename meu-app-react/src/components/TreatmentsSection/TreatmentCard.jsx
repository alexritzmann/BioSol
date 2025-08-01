

// src/components/TreatmentsSection/TreatmentCard.jsx
import React from 'react';

const TreatmentCard = ({ title, description }) => {
  return (
    <div className="treatment-card">
      <div className="treatment-icon">
        <img src="/treatment-icon.png" alt="Ícone" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TreatmentCard;