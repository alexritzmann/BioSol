

import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'; 


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
            <p className="highlighted">__________</p>
            <button className="whatsapp-button">
              Fale conosco via WhatsApp
            </button>
          </div>
        </div>
        
        <div className="image-container">
          <img src="/img/Giih Linda.jpg" alt="Profissional" className="portrait-image"/>
        </div>
      </div>
      <div className='element-divider'>
        <span className='terapeut-title'>
          <div><FontAwesomeIcon icon={faUser} /></div>
          <div>Simone Tauchert</div>
          <div style={{marginLeft: '20px'}}><FontAwesomeIcon icon={faRectangleList} /></div>
          <div>Terapeuta | Medicina chinesa | Ressonância frequencial</div>
        </span>
        
      </div>

    </section>
  );
};

export default HeroSection;