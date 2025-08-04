

import TreatmentCard from './TreatmentCard';
import ServiceCard from './ServiceCard';
import FeatureList from '../FeatureList/FeatureList';
import './TreatmentsSection.css';

// Importando ícones
import { 
  FaBrain, 
  FaHeartbeat, 
  FaHeadSideVirus, 
  FaChild, 
  FaMemory, 
  FaUserGraduate 
} from 'react-icons/fa';

const TreatmentsSection = () => {
  const treatments = [
    { 
      icon: <FaHeartbeat className="treatment-icon" />,
      title: 'Ansiedade', 
      description: 'Sofre com episódios de ansiedade, estresse, ataques do pânico ou distúrbios do sono.' 
    },
    { 
      icon: <FaHeadSideVirus className="treatment-icon" />,
      title: 'Depressão', 
      description: 'Tratamento especializado para quadros depressivos e alterações de humor.' 
    },
    { 
      icon: <FaBrain className="treatment-icon" />,
      title: 'TDAH', 
      description: 'Acompanhamento para Transtorno de Déficit de Atenção e Hiperatividade.' 
    },
    { 
      icon: <FaChild className="treatment-icon" />,
      title: 'Autismo', 
      description: 'Suporte especializado para Transtorno do Espectro Autista (TEA).' 
    },
    { 
      icon: <FaMemory className="treatment-icon" />,
      title: 'Alzheimer', 
      description: 'Cuidados para pacientes com demência e seus familiares.' 
    },
    { 
      icon: <FaUserGraduate className="treatment-icon" />,
      title: 'Orientação Vocacional', 
      description: 'Auxílio na escolha profissional e desenvolvimento de carreira.' 
    }
  ];

  const services = [
    {
      title: '01.',
      subtitle: 'Consulta',
      description: 'A consulta servirá de guia para o seu tratamento. É nessa etapa que vamos decidir juntos se o seu problema se adequa para tratamento através da hipnose.'
    },
    {
      title: '02.',
      subtitle: 'Terapia',
      description: 'Com base nas informações levantadas na consulta, o tratamento se inicia. Duração em torno de 60min até 2 horas'
    },
    {
      title: '03.',
      subtitle: 'Retorno',
      description: 'Duração em torno de 50min até 1h e 30mins'
    }
  ];

  return (
    <section id="tratamentos" className="treatments-section">
      <div className="treatments-container">
        <div className="section-header">
          <h2>Conheça nossos tratamentos</h2>
          <p className="subtitle">A Hipnoterapia pode beneficiar qualquer pessoa que esteja sofrendo com  dores emocionais.</p>
          <p className="highlighted">__________</p>
        </div>
        
        <div className="treatment-cards-grid">
          {treatments.map((treatment, index) => (
            <div className="treatment-card" key={index}>
              <div className="icon-container">
                {treatment.icon}
              </div>
              <h3>{treatment.title}</h3>
              <p>{treatment.description}</p>
            </div>
          ))}
        </div>
        
        <div className="treatment-details">
          <div className="portrait-column">
            <img src="/img/Giih Linda.jpg" alt="Profissional" className="details-portrait"/>
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
          <p className="services-subtitle">É feito em média de três sessões que são divididas da seguinte maneira:</p>
          <p className="highlighted">__________</p>
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