import { createAction } from 'redux-act';


import { Pokemons } from './initial-state';




const getCategories=():object =>{
  return {type:'GET_CATEGORIE'}
}

const getProductsAll=():object =>{
  return {type:'GET_CATEGORIE'}
}




export {
  
  getCategories,
  getProductsAll,
  
};
