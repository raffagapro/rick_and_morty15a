import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from '../Actions/actionsTypes';
import axios from 'axios';

//action creators
export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFav = (id) => {
    // Completa la funcion
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try {
          const {data} = await axios.delete(endpoint);
          return dispatch({
            type: REMOVE_FAV,
            payload: data,
          });
        } catch (error) {
          console.log(error);
        }
        
    };
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