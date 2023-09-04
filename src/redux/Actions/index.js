import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from '../Actions/actionsTypes';

//action creators
export const addFav = (character) => {
    // Completa la funcion
    return{
      type:ADD_FAV,
      payload:character
    }
};

export const removeFav = (id) => {
    // Completa la funcion
    return{
      type:REMOVE_FAV,
      payload: id
    }
};

export const filterCards = (gender) => {
  // Completa la funcion
  return{
    type:FILTER,
    payload: gender
  }
};

export const orderCards = (id) => {
  // Completa la funcion
  return{
    type:ORDER,
    payload: id
  }
};