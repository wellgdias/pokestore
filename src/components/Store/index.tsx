import React, { useEffect, useState } from 'react';
import Container from '../Container';
import Card from '../Card';

import api from '../../services';
import { pokemon } from '../../interfaces';
import './style.css';

export default function Store() {
  const [store, setStore] = useState<pokemon[]>();

  useEffect(() => {
    api.get('/pokemon').then((response) => {
      const data: pokemon[] = response.data.results.map(async (item: any) => {
        const response = await api.get(item.url);

        const pokemon: pokemon = {
          id: response.data.id,
          name: response.data.name,
          price: response.data.base_experience * 1.35,
          image: response.data.sprites.front_default,
          types: response.data.types.map((item: any) => ({
            slot: item.slot,
            name: item.type.name,
          })),
        };

        return pokemon;
      });
      Promise.all(data).then((response: pokemon[]) => {
        setStore(response);
      });
    });
  }, []);

  return (
    <div className="store">
      <Container>
        <section className="store__itens">
          {store?.map((pokemon: pokemon) => (
            <Card key={pokemon.id} data={pokemon} />
          ))}
        </section>
      </Container>
    </div>
  );
}
