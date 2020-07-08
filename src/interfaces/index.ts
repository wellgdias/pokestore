import { types } from 'util';

export interface pokemon {
  id: number;
  name: string;
  price: number;
  image: string;
  types: types[];
}

type types = {
  slot: number;
  name: string;
};
