import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { pokemon } from '../../interfaces';

import './style.css';

let formatter = new Intl.NumberFormat([], {
  style: 'currency',
  currency: 'BRL',
});

export default function Conatiner(props: any) {
  const pokemon: pokemon = props.data;
  const classNametype = `card__type type-${pokemon.types[0].name}`;

  return (
    <div className="card">
      <div className="card__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>

      <span className="card__name">{pokemon.name.toUpperCase()}</span>
      <div className="card__types">
        {pokemon.types.map((type) => (
          <span key={type.slot} className={classNametype}>
            {type.name.toUpperCase()}
          </span>
        ))}
      </div>

      <div className="cart_pay">
        <span className="card__price">{formatter.format(pokemon.price)}</span>
        <FaCartPlus className="cart_add" />
      </div>
    </div>
  );
}
