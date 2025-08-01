

// src/components/TreatmentsSection/TreatmentsSection.jsx
import React from 'react';
import TreatmentCard from './TreatmentCard';
import ServiceCard from './ServiceCard';
import FeatureList from '../FeatureList/FeatureList';
import './TreatmentsSection.css';

const TreatmentsSection = () => {
  const treatments = [
    { 
      title: 'Ansiedade', 
      description: 'Sofre com episódios de ansiedade, estresse, ataques do pânico ou distúrbios do sono.' 
    },
    { 
      title: 'Depressão', 
      description: 'Tratamento especializado para quadros depressivos e alterações de humor.' 
    },
    { 
      title: 'TDAH', 
      description: 'Acompanhamento para Transtorno de Déficit de Atenção e Hiperatividade.' 
    },
    { 
      title: 'Autismo', 
      description: 'Suporte especializado para Transtorno do Espectro Autista (TEA).' 
    },
    { 
      title: 'Alzheimer', 
      description: 'Cuidados para pacientes com demência e seus familiares.' 
    },
    { 
      title: 'Orientação Vocacional', 
      description: 'Auxílio na escolha profissional e desenvolvimento de carreira.' 
    }
  ];

  const services = [
    {
      title: 'Avaliação Completa',
      subtitle: 'Diagnóstico preciso',
      description: 'Processo detalhado de avaliação para identificar necessidades específicas.'
    },
    {
      title: 'Acompanhamento Contínuo',
      subtitle: 'Suporte permanente',
      description: 'Sessões regulares para monitoramento do desenvolvimento e progresso.'
    },
    {
      title: 'Atendimento Familiar',
      subtitle: 'Suporte integrado',
      description: 'Orientação e apoio para familiares e cuidadores.'
    }
  ];

  return (
    <section id="tratamentos" className="treatments-section">
      <div className="treatments-container">
        <div className="section-header">
          <h2>Conheça nossos tratamentos</h2>
          <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
        </div>
        
        <div className="treatment-cards-grid">
          {treatments.map((treatment, index) => (
            <TreatmentCard 
              key={index}
              title={treatment.title}
              description={treatment.description}
            />
          ))}
        </div>
        
        <div className="treatment-details">
          <div className="portrait-column">
            <img 
              src="/retrato-profissional-2.jpg" 
              alt="Profissional" 
              className="details-portrait"
            />
          </div>
          
          <div className="features-column">
            <h3>Por que escolher nossa abordagem?</h3>
            <FeatureList />
            <button className="appointment-button">
              Agende sua consulta
            </button>
          </div>
        </div>
        
        <div className="services-section">
          <h3 className="services-title">Nossa Metodologia de Trabalho</h3>
          <p className="services-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          
          <div className="services-cards">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;