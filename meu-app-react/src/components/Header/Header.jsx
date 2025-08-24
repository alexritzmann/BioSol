

import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './Header.css';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/img/Logo_Completa-removebg-preview.png" alt="Logo" />
        </div>
        
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        
        <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
            <li><a href="#tratamentos" onClick={() => setMenuOpen(false)}>Tratamentos</a></li>
            <li><a href="#faq" onClick={() => setMenuOpen(false)}>Perguntas Frequentes</a></li>
            <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
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

