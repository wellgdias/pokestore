import React from 'react';

import Container from '../Container';

import LinkedIn from '../../assets/crown.svg';
import GitHub from '../../assets/pokemon_coin.svg';

import './style.css';

export default function App() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__image">
          <img src={LinkedIn} alt="LinkedIn" className="image__logo" />
          <img src={GitHub} alt="GitHub" className="image__logo" />
        </div>
      </Container>
    </footer>
  );
}
