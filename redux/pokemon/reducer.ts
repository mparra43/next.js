import { produce } from 'immer';
import { createReducer } from 'redux-act';


import {
  getCategories
} from './actions';
import { pokemons, Pokemons } from './initial-state';



const pokemosReducer = createReducer<Pokemons>({}, pokemons);
const searchHeaderReducer = createReducer<{
  value?: string;
  valuePromotion?: string;
}>({}, { value: '', valuePromotion: '' });




export {
  pokemosReducer
};
