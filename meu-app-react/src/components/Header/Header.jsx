

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/img/Logo_Completa-removebg-preview.png" alt="Logo" />
        </div>
        
        <nav className="navigation">
          <ul>
            <a href="#sobre">Sobre</a>
            <a href="#tratamentos">Tratamentos</a>
            <a href="#faq">Perguntas Frequentes</a>
            <a href="#contato">Contato</a>
          </ul>
        </nav>
        
        <button className="appointment-button">
          Agende sua consulta
        </button>
      </div>
    </header>
  );
};

export default Header;

