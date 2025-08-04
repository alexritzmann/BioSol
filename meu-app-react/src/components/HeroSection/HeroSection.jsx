

import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <div className="top-text">
            <h1>Supere a ansiedade, fobias, medos, traumas e impedimentos que paralisam a sua vida</h1>
            <p>Diferente dos tratamentos convencionais, tratamos problema na raiz emocional. Tendo um resultado mais eficaz e rápido.</p>
          </div>
          
          <div className="bottom-text">
            <button className="whatsapp-button">
              Fale conosco via WhatsApp
            </button>
          </div>
        </div>
        
        <div className="image-container">
          <img src="/img/Giih Linda.jpg" alt="Profissional" className="portrait-image"/>
        </div>
      </div>
      
      <div className="professional-info">
        <div className="info-item">
          <span className="icon">👤</span>
          <span>Simone Tauchert</span>
        </div>
        <div className="divider"></div>
        <div className="info-item">
          <span className="icon">📋</span>
          <span>Terapeuta | Medicina chinesa | Ressonância frequencial</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

