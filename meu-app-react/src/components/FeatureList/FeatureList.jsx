

// src/components/FeatureList/FeatureList.jsx
import React from 'react';
import './FeatureList.css';

const FeatureList = () => {
  const features = [
    'Abordagem humanizada e personalizada',
    'Profissionais altamente qualificados',
    'Tecnologia de ponta em diagnósticos',
    'Acompanhamento contínuo e integral',
    'Ambiente acolhedor e seguro',
    'Foco em resultados a longo prazo'
  ];

  return (
    <ul className="feature-list">
      {features.map((feature, index) => (
        <li key={index} className="feature-item">
          <span className="check-icon">✓</span>
          {feature}
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;