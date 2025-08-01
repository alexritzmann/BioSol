

// src/components/AboutSection/AboutSection.jsx
import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <img src="/img/Logo_Completa-removebg-preview.png" alt="Logo" className="about-logo" />
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
            Vivamus luctus eros aliquet convallis ultricies. Mauris ipsum nulla, pharetra 
            vitae libero a, euismod lacinia enim.
          </p>
        </div>
        
        <div className="reviews-container">
          <div className="review-card">
            <p>"Excelente profissional, atendimento diferenciado!"</p>
            <div className="review-author">- Cliente Satisfeito</div>
          </div>
          <div className="review-card">
            <p>"Transformou minha vida com o tratamento adequado."</p>
            <div className="review-author">- Cliente Satisfeito</div>
          </div>
        </div>
        
        <div className="landscape-image-container">
          <img 
            src="/foto-paisagem.jpg" 
            alt="Paisagem" 
            className="landscape-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;