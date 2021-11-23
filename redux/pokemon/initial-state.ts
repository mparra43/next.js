import { Brand, Product, ProductVariant } from 'redux/api/product/dto';

export type Pokemons = {
  pokemosApi?:object[];
};
const pokemons: Pokemons = {
  pokemosApi: [],
};


export { pokemons };
