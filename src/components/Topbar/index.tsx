import React from 'react';

import Container from '../Container';

import Logo from '../../assets/pokemon_logo.png';
import ShoppingBag from '../../assets/shopping_bag.svg';
import Pokeball from '../../assets/pokeball.svg';
import './style.css';

export default function Topbar() {
  return (
    <header className="topbar">
      <Container>
        <div className="topbar__default">
          <div className="topbar__logo">
            <img src={Logo} alt="Pokestore" className="logo__image" />
          </div>
          <div className="topbar__filter">
            <input
              type="text"
              name="Procurar Pokemon"
              className="filter_pokemon"
              placeholder="Procurar Pokemon"
            />
            <div className="filter__button">
              <img src={Pokeball} alt="Pokeball" className="filter__pokeball" />
            </div>
          </div>
          <div className="topbar__menu">
            <img src={ShoppingBag} alt="ShoppingBag" className="menu__bag" />
          </div>
        </div>
      </Container>
    </header>
  );
}
